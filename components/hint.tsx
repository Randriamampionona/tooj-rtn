import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

type TProps = {
  children: React.ReactNode;
  label: string;
  side?: "top" | "right" | "bottom" | "left" | undefined;
  className?: string;
};

const Hint = ({ children, label, side = "top", className }: TProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className={className}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
