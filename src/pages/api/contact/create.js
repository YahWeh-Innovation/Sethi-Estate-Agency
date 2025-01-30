import Contact from "../../../models/Contact";
import dbConnect from "../../../lib/dbConnect";
import successHelper from "../../../utils/helpers/successHelper";
import errorHelper from "../../../utils/helpers/errorHelper";
import nodemailer from "nodemailer";


export default async function handler(req, res) {
  console.log("Request received:", req.method);

  if (req.method !== "POST") {
    console.log("Invalid request method:", req.method);
    return res.status(405).json(errorHelper("Method Not Allowed"));
  }

  try {
    await dbConnect(); 
    const name = `${req.body.firstName} ${req.body.lastName || ""}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,   // Add app password not email password
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nPhone Number: ${req.body.number}\nMessage: ${req.body.description}`,
    });

    const contact = new Contact({
      name,
      email: req?.body?.email || "",
      number: req?.body?.number,
      description: req.body.description,
    });

    const savedContact = await contact.save();
    console.log("Contact saved:", savedContact);

    res.status(201).json(successHelper("Contact saved successfully", savedContact));
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json(
      errorHelper(`An error occurred: ${error.message}`)
    );
  }
}