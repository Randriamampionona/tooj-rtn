import Image from "next/image";
import { CalendarRange, Code2 } from "lucide-react";
import Link from "next/link";
import TechStack from "./tech-stack";
import CardAction from "./card-action";
import Badge from "@/components/badge";

type TProps = {
  project: TProject;
};

export default function ProjetcCard({ project }: TProps) {
  return (
    <div className="group border p-2 rounded-md space-y-4 w-full shadow-md">
      {/* preview */}
      <div className="relative flex items-end w-full h-32 rounded-md overflow-hidden">
        {project.preview ? (
          <Image
            alt={project.name}
            src={project.preview}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="absolute flex items-center justify-center w-full h-full bg-accent">
            <Code2 size={60} className="text-muted-foreground/20" />
          </div>
        )}
        <CardAction git_repo={project.git_repo} url={project.url} />
        {project.isPro && <Badge text={"Pro"} className="top-1 right-1 group-hover:opacity-30"/>}
      </div>

      {/* footer */}
      <div className="space-y-4">
        {/* header */}
        <div className="flex items-center space-x-2 w-full">
          <div className="flex-shrink-0 flex items-center justify-center relative w-8 min-h-[2rem] h-8 rounded-full overflow-hidden bg-muted ring-1">
            {project.preview ? (
              <Image
                alt={project.name}
                src={project.preview}
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <Code2 />
            )}
          </div>

          <div className="leading-none">
            <h1 className="flex items-center font-bold space-x-2">
              {project.name}
            </h1>
            <Link
              href={project.url}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground line-clamp-1 break-all"
            >
              {project.url.replace("https://", "")}
            </Link>
          </div>
        </div>

        {/* date */}
        <div className="flex items-center italic text-xs text-muted-foreground space-x-2">
          <CalendarRange size={16} />
          <span className="underline">
            From: {new Date(project.date.start).toLocaleDateString()}{" "}
            {!!project.date.end
              ? `to: ${new Date(project.date.end).toLocaleDateString()}`
              : "until now"}
          </span>
        </div>

        <TechStack techStack={project.tech} />
      </div>
    </div>
  );
}
