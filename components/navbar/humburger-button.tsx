"use client";

import { Button } from "@/components/ui/button";
import { menuStore } from "@/store/menu.store";
import { ListPlus } from "lucide-react";

type TProps = {};

export default function HumburgerButton({}: TProps) {
  const { setIsOpen } = menuStore((state) => state);

  return (
    <div className="block md:hidden">
      <Button variant="ghost" size="icon" onClick={setIsOpen}>
        <ListPlus />
      </Button>
    </div>
  );
}
