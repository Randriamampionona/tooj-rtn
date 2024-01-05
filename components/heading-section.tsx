import { cn } from "@/lib/utils";

type TProps = {
  heading: string;
  className?: string;
};

export default function HeadingSection({ heading, className }: TProps) {
  return (
    <h1 className={cn("font-bold text-5xl mb-4", className ?? className)}>
      {heading} ✨
    </h1>
  );
}
