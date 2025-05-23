import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface EarlyAccessSubmission {
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address required' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission: EarlyAccessSubmission = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
    };

    // Store in simple JSON file for now
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'early-access-signups.json');

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing data or create empty array
    let existingData: EarlyAccessSubmission[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Check for duplicate email
    const emailExists = existingData.some(item => item.email === submission.email);
    if (emailExists) {
      return NextResponse.json({ 
        message: 'Thanks! You\'re already on the list for Weather Station early access.',
        duplicate: true 
      });
    }

    // Add new submission
    existingData.push(submission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    console.log(`New Weather Station early access signup: ${submission.email}`);

    return NextResponse.json({ 
      message: 'Thanks for your interest! We\'ll notify you when Weather Station is ready.',
      success: true 
    });

  } catch (error) {
    console.error('Early access signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}