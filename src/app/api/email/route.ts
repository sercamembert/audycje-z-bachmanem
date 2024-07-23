import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const name = body.name;
  const email = body.email;
  const companyName = body.companyName;
  const message = body.message;

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: "support@outofplace.space",

      subject: `Nowa wiadomość z formularza od: ${name}`,
      text: `
      Imie i nazwisko:
      ${name}
      \n
      Email: \n
      ${email}
      \n
      Nazwa Firmy:
      ${companyName}
      \n
      Wiadomość:
      ${message}
      `,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transport.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return new Response("OK");
  } catch (error) {
    return new Response("Couldn't send email", { status: 500 });
  }
};
