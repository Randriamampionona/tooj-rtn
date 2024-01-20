import { ToastTypes } from "@/components/ui/sonner";
import { MouseEvent } from "react";
import { toast } from "sonner";

type TParams = {
  type: ToastTypes;
  message: string;
  description?: string;
  action?: {
    label: string;
    onClick: (
      event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => void;
  };
};

export function toastify({
  type = "default",
  message,
  description,
  action,
}: TParams) {
  switch (type) {
    case "success":
      return toast.success(message, {
        description,
        action,
      });

    case "error":
      return toast.error(message, {
        description,
        action,
      });

    case "warning":
      return toast.warning(message, {
        description,
        action,
      });

    default:
      return toast(message, {
        description,
        action,
      });
  }
}
