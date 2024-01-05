import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

type TProps = {
  dialogTrigger: JSX.Element;
  dialogContent: {
    id: number;
    Icon: LucideIcon;
    title: string;
    exerpt: string;
    decription: string;
  };
};

export default function ServiceDialog({
  dialogTrigger,
  dialogContent,
}: TProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <h1 className="inline-flex items-center font-bold text-xl mb-2 space-x-2">
              <dialogContent.Icon />
              <span>{dialogContent.title}</span>
            </h1>
          </DialogTitle>
          <DialogDescription>{dialogContent.exerpt}</DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          {dialogContent.decription}
        </div>
      </DialogContent>
    </Dialog>
  );
}
