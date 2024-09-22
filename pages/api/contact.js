import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response("Missing name, email, or message", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 587,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
      auth: {
        user: process.env.username,
        pass: process.env.password,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.username,
      to: process.env.myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Success: email was sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response("Error sending email", { status: 500 });
  }
}
