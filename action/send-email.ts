"use server";

import { nodemailerService } from "@/lib/nodemailer-service";
import { SendMailOptions } from "nodemailer";

export default async function sendEmail(
  params: { name?: string } & SendMailOptions
) {
  try {
    await nodemailerService(params);
  } catch (error) {
    console.log(error);
  }
}
