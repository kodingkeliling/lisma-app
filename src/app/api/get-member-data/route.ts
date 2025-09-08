import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const kode = searchParams.get('kode');

    if (!kode) {
      return NextResponse.json(
        { error: 'Kode is required' },
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

    // Fetch data from anggota sheet
    const anggotaResponse = await fetch(`${sheetApiUrl}anggota`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    if (!anggotaResponse.ok) {
      throw new Error(`HTTP error! anggota: ${anggotaResponse.status}`);
    }

    const anggotaData = await anggotaResponse.json();
    
    // Get all members from anggota sheet
    const members = Array.isArray(anggotaData) ? anggotaData : anggotaData.data || [];
    
    // Find member with matching kode
    const memberData = members.find((row: Record<string, unknown>) => {
      return row.kode === kode || 
             Object.values(row).includes(kode);
    });

    if (!memberData) {
      return NextResponse.json(
        { error: 'Data anggota tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        data: memberData
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching member data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
