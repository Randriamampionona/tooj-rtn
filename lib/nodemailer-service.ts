import nodemailer, { SendMailOptions } from "nodemailer";

export async function nodemailerService(
  params: { name?: string } & SendMailOptions
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL!,
      pass: process.env.NODEMAILER_PW!,
    },
  });

  const mailOptions: SendMailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: params.to,
    subject:
      params.subject ?? `${params?.name + " — "}Collaborate with Toojrtn`,
    text: params.text,
    ...params,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, response) {
      if (!error) {
        console.log("no error");
        resolve(
          `Thanks for reaching me, I will come back to you ASAP. (ref: #${response.messageId})`
        );
      } else {
        reject(error.message);
        console.log("eror =================> ", error);
      }
    });
  });
}
