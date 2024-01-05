"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

type TProps = {};

export default function HumburgerButton({}: TProps) {
  return (
    <div className="block md:hidden">
      <Button variant="ghost" size="icon">
        <MoreVertical />
      </Button>
    </div>
  );
}
