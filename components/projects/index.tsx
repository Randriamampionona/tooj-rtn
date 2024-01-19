"use client";

import HeadingSection from "@/components/heading-section";
import ProjetcCard from "./projetc-card";
import { Button } from "@/components/ui/button";
import {
  Suspense,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { cn } from "@/lib/utils";
import InViewProvider from "@/providers/in-view-provider";
import getProject from "@/action/get-project";

type TProps = {
  id: string;
};

export default function Projects({ id }: TProps) {
  const [project, setProject] = useState<TProject[]>([]);
  const [activeTab, setActiveTab] = useState<TProjectType>("all");
  const [isPending, startTransition] = useTransition();

  const onSwitch = (tab: TProjectType) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    startTransition(async () => {
      const result = await getProject(activeTab);
      setProject(result);
    });
  }, [activeTab]);

  return (
    <InViewProvider section_ID={id}>
      <section className="section" id={id}>
        <div className="flex flex-col items-center justify-center space-y-6">
          <HeadingSection
            heading="My portfolio adventures"
            className="text-center"
          />

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="link"
                onClick={() => onSwitch("all")}
                className={cn(activeTab === "all" && "underline")}
              >
                All
              </Button>
              <Button
                variant="link"
                onClick={() => onSwitch("professional")}
                className={cn(activeTab === "professional" && "underline")}
              >
                Professional
              </Button>
              <Button
                variant="link"
                onClick={() => onSwitch("personal")}
                className={cn(activeTab === "personal" && "underline")}
              >
                Personal
              </Button>
            </div>

            {isPending && <p>Loading...</p>}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.map((project) => (
                <ProjetcCard key={project.url} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </InViewProvider>
  );
}
