"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, SendHorizonal, User } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { toastify } from "@/lib/toastify";
import emailjs from "@emailjs/browser";

type TValues = {
  name: string;
  email: string;
  message: string;
};

type TProps = {
  close_dialog?: () => void;
  defaultState: TValues;
  className?: string;
};

type TEvents = ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>;

export default function ContactForm({
  close_dialog,
  defaultState,
  className,
}: TProps) {
  const [values, setValues] = useState<TValues>(defaultState);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handlerChange = (e: TEvents) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email.trim() || !values.message.trim()) return;

    if (!formRef.current) return;

    try {
      setIsSending(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_KEY!
      );

      toastify({
        message: `Thanks for reaching me out, I will come back to you ASAP`,
      });
    } catch (error: any) {
      toastify({
        message: "Something went wrong, try again later",
      });
    } finally {
      setValues(defaultState);
      setIsSending(false);
      close_dialog?.();
    }
  };

  return (
    <form
      ref={formRef}
      className={cn("max-w-sm mx-auto space-y-2", className ?? className)}
      onSubmit={onSubmit}
    >
      <div>
        <Label>
          Name <span className="text-muted-foreground">(optional)</span>
        </Label>
        <div className="relative">
          <User
            size={17}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="text"
            placeholder="Your fullname"
            name="name"
            value={values.name}
            onChange={handlerChange}
            className="pl-[calc(0.75rem*2+0.75rem)]"
          />
        </div>
      </div>

      <div>
        <Label>Email</Label>
        <div className="relative">
          <Mail
            size={17}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            required
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            onChange={handlerChange}
            className="pl-[calc(0.75rem*2+0.75rem)]"
          />
        </div>
      </div>

      <div>
        <Label>Message</Label>

        <textarea
          required
          name="message"
          rows={7}
          placeholder="Leave me a message"
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={values.message}
          onChange={handlerChange}
        />
      </div>

      <Button
        className="button_gradient w-full lg:w-auto h-12 px-6 font-bold space-x-2 !mt-4"
        disabled={isSending}
      >
        {isSending && <Loader2 size={17} className="animate-spin" />}
        <span>{isSending ? "Sending..." : "Send"}</span>
        {!isSending && <SendHorizonal size={17} />}
      </Button>
    </form>
  );
}
