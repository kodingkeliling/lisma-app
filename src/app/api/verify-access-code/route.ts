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

    // Fetch data from Google Sheets
    const response = await fetch(sheetApiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Assuming the sheet returns an array of objects with access codes
    // You may need to adjust this based on your actual sheet structure
    const accessCodes = Array.isArray(data) ? data : data.data || [];
    
    // Check if the provided access code exists in the sheet
    const isValidCode = accessCodes.some((row: any) => {
      // Adjust this based on your sheet structure
      // If your sheet has a column named 'access_code' or similar
      return row.access_code === accessCode || 
             row.kode_akses === accessCode ||
             Object.values(row).includes(accessCode);
    });

    if (isValidCode) {
      return NextResponse.json(
        { 
          valid: true, 
          message: 'Access code is valid' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          valid: false, 
          message: 'Invalid access code' 
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
