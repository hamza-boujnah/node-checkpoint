const nodemailer = require('nodemailer');

// Create a transporter using your SMTP server details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-password', // Replace with your email password or an app-specific password
  },
});

// Define the email options (to, subject, text, etc.)
const mailOptions = {
  from: 'your-email@gmail.com', // Replace with your email
  to: 'recipient@example.com', // Replace with the recipient's email
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});
