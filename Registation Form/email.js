const MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'studentDB';

// Collection Name
const collectionName = 'emails';

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password'
  }
});

// Function to fetch emails from MongoDB and send email
async function sendEmails() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB...");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch all emails from the collection
    const emails = await collection.find({}).toArray();

    // Close the MongoDB connection
    await client.close();

    // Send email to each address
    emails.forEach(async (emailObj) => {
      try {
        const mailOptions = {
          from: 'your_email_address',
          to: emailObj.email,
          subject: 'Your Subject Here',
          text: 'Your Email Message Here'
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${emailObj.email}`);
      } catch (error) {
        console.error(`Error sending email to ${emailObj.email}: ${error}`);
      }
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to send emails
sendEmails();
