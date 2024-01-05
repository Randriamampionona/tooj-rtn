import { cn } from "@/lib/utils";
import BackToTopBtn from "./Back-to-top-btn";

type TProps = {
  className?: string;
};

export default function Footer({ className }: TProps) {
  return (
    <footer
      className={cn(
        "relative flex items-center justify-center border-t w-full h-16",
        className ?? className
      )}
    >
      <p className="text-xs text-muted-foreground">
        &copy;{new Date().getFullYear()} all rights reserved.
      </p>

      <BackToTopBtn />
    </footer>
  );
}
