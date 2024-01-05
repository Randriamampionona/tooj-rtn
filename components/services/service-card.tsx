import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceDialog from "./service-dialog";

type TProps = {
  service: {
    id: number;
    Icon: LucideIcon;
    title: string;
    exerpt: string;
    decription: string;
  };
};

export default function ServiceCard({ service }: TProps) {
  return (
    <div className="group p-4 rounded-md border bg-slate-50/50 dark:bg-transparent shadow-md">
      <div>
        <h1 className="inline-flex items-center font-bold text-xl mb-2 space-x-2 group-hover:space-x-0">
          <service.Icon className="group-hover:w-0 group-hover:h-0 transition-all" />
          <span className="line-clamp-1">{service.title}</span>
        </h1>
        <p className="text-muted-foreground line-clamp-3 overflow-hidden">
          {service.exerpt}
        </p>

        <ServiceDialog
          dialogTrigger={
            <Button variant="link" className="text-sky-600 p-0 underline">
              <span>See more</span>
            </Button>
          }
          dialogContent={service}
        />
      </div>
    </div>
  );
}
