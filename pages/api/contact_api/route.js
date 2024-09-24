import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const username = process.env.username;
  const password = process.env.password;
  const myEmail = process.env.myEmail;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Missing name, email, or message" });
    }

    const transporter = nodemailer.createTransport({
      host: "vda4400.is.cc",
      port: 587,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Github Website activity from ${email}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
