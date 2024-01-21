"use server";

import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";

type TResult = {
  is_spamming: boolean;
  timer: number;
};

export default async function getAntiSpam(): Promise<TResult> {
  const cookie = cookies();
  const cookie_name = process.env.NO_SPAM_COOKIE_NAME!;

  const exist = cookie.has(cookie_name);

  if (!exist)
    return {
      is_spamming: false,
      timer: 0,
    };

  const token = cookie.get(cookie_name)?.value!;

  const decoded_value = decode(token);

  if (!decoded_value)
    return {
      is_spamming: false,
      timer: 0,
    };

  const data = decoded_value as {
    email: string;
    exp_date: string;
  };

  const now = new Date(Date.now());

  const exp_date = new Date(data.exp_date);

  return {
    is_spamming: now < exp_date ? true : false,
    timer: Math.round((exp_date.getTime() - now.getTime()) / 1000),
  };
}
