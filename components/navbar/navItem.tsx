"use client";

import { cn } from "@/lib/utils";
import { inViewStore } from "@/store/in-view.store";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type TProps = {
  navitem: {
    slug: string;
    text: string;
  };
};

export default function NavItem({ navitem }: TProps) {
  const { sectionName } = inViewStore((state) => state);
  const params = useParams();
  const router = useRouter();
  const [hash, setHash] = useState("");

  const navitemHash = navitem.slug.replace("/", "").replace("#", "");

  const scrollIntoView = useCallback(() => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(hash);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  }, [hash]);

  const onNavigate = () => {
    router.push(navitem.slug);

    scrollIntoView();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const formatedHash = window.location.hash.replace("#", "");

    setHash(formatedHash);
  }, [params]);

  useEffect(() => scrollIntoView(), [hash]);

  return (
    <li
      className={cn(
        "relative hover:text-orange-600 transition-all duration-150 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-1/2 after:h-1 after:bg-orange-600 after:rounded-full cursor-pointer after:transition-all after:duration-150",
        navitemHash === sectionName &&
          "text-orange-600 font-semibold after:w-1/2"
      )}
      onClick={onNavigate}
    >
      {navitem.text}
    </li>
  );
}
