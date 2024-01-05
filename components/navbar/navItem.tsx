"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type TProps = {
  navitem: {
    slug: string;
    text: string;
  };
};

export default function NavItem({ navitem }: TProps) {
  const params = useParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    setHash(`/${window.location.hash}`);
  }, [params]);

  return (
    <li className={cn(navitem.slug === hash && "text-blue-600")}>
      <Link href={navitem.slug}>{navitem.text}</Link>
    </li>
  );
}
