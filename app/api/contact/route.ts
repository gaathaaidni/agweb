import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 });
  }

  console.info('Contact enquiry', { firstName, lastName, email, message });
  return NextResponse.redirect(new URL('/contact?sent=1', request.url), 303);
}
