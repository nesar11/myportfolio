// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server host
      port: 587, // Replace with your SMTP server port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Replace with your SMTP username
        pass: 'your-email-password', // Replace with your SMTP password
      },
    });

    // Set up email data with unicode symbols
    let mailOptions = {
      from: '"Contact Form" <your-email@example.com>', // Replace with your email address
      to: 'recipient@example.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
