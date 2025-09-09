import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { accessCode } = await request.json();

    if (!accessCode) {
      return NextResponse.json(
        { error: 'Access code is required' },
        { status: 400 }
      );
    }

    // Get the Google Sheets API URL from environment variables
    const sheetApiUrl = process.env.NEXT_PUBLIC_SHEET_API;
    
    if (!sheetApiUrl) {
      return NextResponse.json(
        { error: 'Sheet API URL not configured' },
        { status: 500 }
      );
    }

    // Fetch data from both sheets - kode sheet and anggota sheet
    const [kodeResponse, anggotaResponse] = await Promise.all([
      fetch(`${sheetApiUrl}kode`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }),
      fetch(`${sheetApiUrl}anggota`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      })
    ]);

    if (!kodeResponse.ok || !anggotaResponse.ok) {
      throw new Error(`HTTP error! kode: ${kodeResponse.status}, anggota: ${anggotaResponse.status}`);
    }

    const [kodeData, anggotaData] = await Promise.all([
      kodeResponse.json(),
      anggotaResponse.json()
    ]);
    
    // Get valid codes from kode sheet
    const validCodes = Array.isArray(kodeData) ? kodeData : kodeData.data || [];
    
    // Get used codes from anggota sheet
    const usedCodes = Array.isArray(anggotaData) ? anggotaData : anggotaData.data || [];
    
    // Check if the code exists in valid codes (kode sheet)
    const isValidCode = validCodes.some((row: Record<string, unknown>) => {
      return row.kode === accessCode || 
             Object.values(row).includes(accessCode);
    });

    // Check if the code is already used (anggota sheet)
    const usedCodeData = usedCodes.find((row: Record<string, unknown>) => {
      return row.kode === accessCode || 
             Object.values(row).includes(accessCode);
    });

    if (usedCodeData) {
      return NextResponse.json(
        { 
          valid: false, 
          message: 'Kode akses sudah digunakan',
          isUsed: true,
          redirectTo: `/pendaftaran/${accessCode}`,
          accessCode: accessCode
        },
        { status: 200 }
      );
    }

    if (isValidCode) {
      return NextResponse.json(
        { 
          valid: true, 
          message: 'Access code is valid',
          accessCode: accessCode
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          valid: false, 
          message: 'Kode akses tidak valid' 
        },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Error verifying access code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
