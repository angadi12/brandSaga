// /pages/api/Contact.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, lastName, email, serviceRequired, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.email, // Your Gmail address
      pass: process.env.pass, // Your app password
    },
  });

  let mailOptions = {
    from: process.env.email,
    to:process.env.Client_Email, // The email address where you want to receive the contact details
    subject: serviceRequired,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      service Required: ${serviceRequired}
      Message: ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
      <div style="text-align: center; background-color:black">
      <img src="https://res.cloudinary.com/dipr7y36n/image/upload/v1717095143/BRAND-SAGA/Logo/image-Photoroom_emoqur.png" alt="Logo" style="max-width: 150px; height: auto;"/>
    </div>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>

        <div style="margin-top: 20px; padding: 10px; border-top: 2px solid #D33313;">
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
