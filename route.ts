import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Basic in-memory rate limiting store
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const LIMIT = 5; // Max requests per window
const WINDOW = 60 * 1000; // 1 minute window in milliseconds

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const now = Date.now();

    const userRecord = rateLimitMap.get(ip);

    if (userRecord && (now - userRecord.lastReset) < WINDOW) {
      if (userRecord.count >= LIMIT) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again after a minute.' },
          { status: 429 }
        );
      }
      userRecord.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Logic for sending email would go here.
    // For now, we log the submission to the console.
    console.log('Contact form submission received:', {
      name: `${firstName} ${lastName}`,
      email,
      message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}