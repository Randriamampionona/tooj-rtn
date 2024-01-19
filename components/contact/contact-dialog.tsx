import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeartHandshake } from "lucide-react";

type TProps = {
  dialogTrigger: JSX.Element;
  dialogContent: JSX.Element;
  dialogTitle: string;
};

export default function ContactDialog({
  dialogTrigger,
  dialogContent,
  dialogTitle,
}: TProps) {
  return (
    <Dialog>
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

        <div className="flex items-center space-x-2">{dialogContent}</div>
      </DialogContent>
    </Dialog>
  );
}
