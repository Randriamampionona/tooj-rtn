import { cn } from "@/lib/utils";

type TProps = {text: string, className?: string};

export default function Badge({text, className}: TProps) {
  return (
    <div className={cn("absolute px-1 text-slate-100 text-sm font-bold rounded bg-sky-600 cursor-default select-none", className)}>
      {text}
    </div>
  );
}
