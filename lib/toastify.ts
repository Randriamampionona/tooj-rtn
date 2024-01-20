import { MouseEvent } from "react";
import { toast } from "sonner";

type TParams = {
  message: string;
  description?: string;
  action?: {
    label: string;
    onClick: (
      event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => void;
  };
};

export function toastify({ message, description, action }: TParams) {
  return toast(message, {
    description,
    action,
  });
}
