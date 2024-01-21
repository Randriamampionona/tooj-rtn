"use server";

import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export default async function setAntiSpam({ email }: { email: string }) {
  const cookie = cookies();
  const cookie_name = process.env.NO_SPAM_COOKIE_NAME!;
  const is_prod = process.env.NODE_ENV === "production";
  const max_age = +process.env.NO_SPAM_COOKIE_MAX_AGE!;
  const jwt_secret = process.env.NO_SPAM_JWT_SECRET!;

  const now = new Date(Date.now());
  now.setMinutes(now.getMinutes() + max_age);
  now.toISOString();

  const payload = {
    email,
    exp_date: now,
  };

  const encoded_value = sign(payload, jwt_secret);

  cookie.set({
    name: cookie_name,
    value: encoded_value,
    httpOnly: true,
    secure: is_prod,
  });
}
