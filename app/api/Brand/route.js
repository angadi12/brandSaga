
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {

    // const data= await req.json();

    // console.log(data)

  const { contactName, socialMediaLink, websiteURL, instagramLink, category, phoneNumber } = await req.json();

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
    to: process.env.Client_Email, // The email address where you want to receive the registration details
    subject: 'New Registration Details ',
    text: `
    Contact Name: ${contactName}
    social Media Link: ${socialMediaLink}
    website URL: ${websiteURL}
    instagram Link: ${instagramLink}
      Category: ${category}
      Phone Number: ${phoneNumber}
    `,
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="text-align: center; background-color:black">
      <img src="https://res.cloudinary.com/dipr7y36n/image/upload/v1717095143/BRAND-SAGA/Logo/image-Photoroom_emoqur.png" alt="Logo" style="max-width: 150px; height: auto;"/>
    </div>
    <h2 style="color: #D33313;">New Registration Details</h2>
    <p style="color: #309E3A;"><strong>Brand Owner</strong></p>
    <p><strong>contact Name:</strong> ${contactName}</p>
    <p><strong>social Media Link:</strong> ${socialMediaLink}</p>
    <p><strong>website URL:</strong> ${websiteURL}</p>
    <p><strong>instagram Link:</strong> ${instagramLink}</p>
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
