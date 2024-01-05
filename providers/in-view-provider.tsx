"use client";

import { useInView } from "@/hooks/useInView";

type TProps = {
  children: React.ReactNode;
  section_ID: string;
};

export default function InViewProvider({ children, section_ID }: TProps) {
  useInView(section_ID);

  return <>{children}</>;
}
