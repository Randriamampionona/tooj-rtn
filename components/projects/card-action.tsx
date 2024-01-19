import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, LinkIcon } from "lucide-react";

type TProps = {
  git_repo: null | string;
  url: string;
};

export default function CardAction({ git_repo, url }: TProps) {
  return (
    <div className="absolute top-56 group-hover:top-0 w-full h-full bg-neutral-950/60 flex items-center justify-center space-x-4 transition-all duration-100">
      <Link
        href={url}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon">
          <LinkIcon />
        </Button>
      </Link>
      {git_repo ? (
        <Link
          href={git_repo}
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon">
            <Github />
          </Button>
        </Link>
      ) : (
        <Button size="icon" disabled>
          <Github />
        </Button>
      )}
    </div>
  );
}
