import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface EarlyAccessSubmission {
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic email validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email address required' });
    }

    // Create submission object
    const submission: EarlyAccessSubmission = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] as string || req.connection.remoteAddress,
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
      return res.status(200).json({ 
        message: 'Thanks! You\'re already on the list for Weather Station early access.',
        duplicate: true 
      });
    }

    // Add new submission
    existingData.push(submission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    console.log(`New Weather Station early access signup: ${submission.email}`);

    return res.status(200).json({ 
      message: 'Thanks for your interest! We\'ll notify you when Weather Station is ready.',
      success: true 
    });

  } catch (error) {
    console.error('Early access signup error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}