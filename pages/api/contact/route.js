import nodemailer from "nodemailer";

export async function POST(request) {
  const username = "nin.dash@mail.ru";
  const password = "M4jmB4qWiC7rymsiDZT0";
  const myEmail = "gayane.grigoryan.93.gg@gmail.com";
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response("Missing name, email, or message", { status: 301 });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.ru",
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Success: email was sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response("Error sending email error 500", { status: 500 });
  }
}