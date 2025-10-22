import { NextResponse } from 'next/server';
import { BACKEND_ENDPOINTS } from '@/config/api';

export async function GET() {
  try {
    const response = await fetch(BACKEND_ENDPOINTS.CONTESTS.ACTIVE, {
      headers: {
        'Content-Type': 'application/json',
      },
      // This will be called from the server, so we can use the full URL
      cache: 'no-store', // Prevent caching to get fresh data
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Backend error response:', errorData);
      throw new Error(`Failed to fetch contests: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching contests:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to fetch contests',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// Ensure the route is not statically generated
export const dynamic = 'force-dynamic';
