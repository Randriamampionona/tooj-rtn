"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeartHandshake } from "lucide-react";
import ContactForm from "./contact-form";
import { useState } from "react";

type TProps = {
  dialogTrigger: JSX.Element;
  dialogTitle: string;
};

export default function ContactDialog({ dialogTrigger, dialogTitle }: TProps) {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <h1 className="inline-flex items-center font-bold text-xl mb-2 space-x-2">
              <HeartHandshake />
              <span>{dialogTitle}</span>
            </h1>
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <ContactForm
            close_dialog={closeDialog}
            defaultState={{
              name: "",
              email: "",
              message: "",
            }}
            className="w-full max-w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
