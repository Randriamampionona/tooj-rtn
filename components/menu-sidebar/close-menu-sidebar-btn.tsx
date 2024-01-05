"use client";

import { Button } from "@/components/ui/button";
import { menuStore } from "@/store/menu.store";
import { X } from "lucide-react";

type TProps = {};

export default function CloseMenuSidebarBtn({}: TProps) {
  const { setIsOpen } = menuStore((state) => state);

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-6 h-6 text-muted-foreground"
      onClick={() => setIsOpen()}
    >
      <X size={17} />
    </Button>
  );
}
