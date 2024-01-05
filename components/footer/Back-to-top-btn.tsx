"use client";

import { Button } from "@/components//ui/button";
import Hint from "@/components/hint";
import { ArrowUp } from "lucide-react";

type TProps = {};

export default function BackToTopBtn({}: TProps) {
  const onClick = () => {
    const element = document.getElementById("hero-section");

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Hint label="Back to top" side="left">
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 lg:right-4"
        onClick={onClick}
      >
        <ArrowUp size={17} />
      </Button>
    </Hint>
  );
}
