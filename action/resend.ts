"use server";

import { Resend, ErrorResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const MY_EMAIL = "tojorandria474@gmail.com";

type TParams = {
  name?: string;
  sender: string;
  text: string;
};

type TResult = {
  success: boolean;
  message: string;
  name?: string;
};

export default async function sendEmail(params: TParams): Promise<TResult> {
  try {
    const send = await resend.emails.send({
      from: params.sender,
      to: MY_EMAIL,
      subject: `${params?.name + "— "}Collaborate with Toojrtn`,
      text: params.text,
    });

    const send_id = send.data?.id;

    return {
      success: true,
      message: "Thanks for reaching me, I will come back to you ASAP!",
    };
  } catch (error) {
    const err = error as ErrorResponse;
    return {
      success: false,
      ...err,
    };
  }
}
