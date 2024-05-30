
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {

    // const data= await req.json();

    // console.log(data)

  const { pageName, followers, pageURL, language, category, phoneNumber } = await req.json();

//   console.log(pageName,followers.pageURL,category,phoneNumber)

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

  // Set up email data
  let mailOptions = {
    from: process.env.email,
    to: process.env.email, // The email address where you want to receive the registration details
    subject: 'New Registration Details',
    text: `
      Page Name: ${pageName}
      Number of Followers: ${followers}
      Page URL: ${pageURL}
      Content Language: ${language}
      Category: ${category}
      Phone Number: ${phoneNumber}
    `,
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="text-align: center; background-color:black">
      <img src="https://res.cloudinary.com/dipr7y36n/image/upload/v1717095143/BRAND-SAGA/Logo/image-Photoroom_emoqur.png" alt="Logo" style="max-width: 150px; height: auto;"/>
    </div>
    <h2 style="color: #D33313;">New Registration Details</h2>
    <p style="color: #309E3A;"><strong>Influencer</strong></p>
    <p><strong>Page Name:</strong> ${pageName}</p>
    <p><strong>Number of Followers:</strong> ${followers}</p>
    <p><strong>Page URL:</strong> ${pageURL}</p>
    <p><strong>Content Language:</strong> ${language}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <div style="margin-top: 20px; padding: 10px; border-top: 2px solid #D33313;">
    </div>
  </div>
      `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
