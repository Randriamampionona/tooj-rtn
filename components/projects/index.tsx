"use client";

import HeadingSection from "@/components/heading-section";
import ProjetcCard from "./projetc-card";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import InViewProvider from "@/providers/in-view-provider";

type TProps = {
  id: string;
};

export type Ttab = "professional" | "personal" | "all";

export type TProject = {
  name: string;
  url: string;
  date: {
    start: string;
    end: null | string;
  };
  tech: string[];
  git_repo: null | string;
  preview: null | string;
  isPro: boolean;
};

const data: TProject[] = [
  {
    name: "Les francophones",
    url: "https://lesfrancophones.com",
    date: {
      start: "september 2020",
      end: "january 2022",
    },
    tech: ["wordpress"],
    git_repo: null,
    preview: null,
    isPro: true,
  },
  {
    name: "Autofunnel",
    url: "https://autofunnel.io",
    date: {
      start: "january 2022",
      end: "february 2022",
    },
    tech: ["next.js", "craft js", "redux", "next auth"],
    git_repo: null,
    preview: null,
    isPro: true,
  },
  {
    name: "Montreautomatique",
    url: "https://montreautomatique.com",
    date: {
      start: "february 2022",
      end: "august 2022",
    },
    tech: ["wordpress"],
    git_repo: null,
    preview: null,
    isPro: true,
  },
  {
    name: "Conteenium",
    url: "https://conteenium.com",
    date: {
      start: "february 2022",
      end: "august 2022",
    },
    tech: ["wordpress"],
    git_repo: null,
    preview: "",
    isPro: true,
  },
  {
    name: "Maisonetmoi",
    url: "https://maisonetmoi.fr",
    date: {
      start: "november 2022",
      end: "february 2023",
    },
    tech: ["wordpress"],
    git_repo: null,
    preview: "",
    isPro: true,
  },
  {
    name: "Facebook2-0",
    url: "https://facebook2-by-rtn.vercel.app",
    date: {
      start: "june 2021",
      end: null,
    },
    tech: [
      "next.js",
      "mysql2",
      "axios",
      "swr",
      "tailwindcss",
      "framer-motion",
      "jwt",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/facebook2.0",
    preview: "/assets/preview/Facebook2-0.png",
    isPro: false,
  },
  {
    name: "Rohy-server",
    url: "https://rohy-server.vercel.app",
    date: {
      start: "november 2022",
      end: null,
    },
    tech: ["node.js", "express", "bcrypt", "jwt", "mysql", "mvola", "vercel"],
    git_repo: "https://github.com/randriamampionona/rohy_server",
    preview: "/assets/preview/Rohy-server.png",
    isPro: false,
  },
  {
    name: "Rohy",
    url: "https://rohy.vercel.app",
    date: {
      start: "october 2022",
      end: null,
    },
    tech: [
      "next.js",
      "axios",
      "cloudinary",
      "firebase",
      "firebase-admin",
      "framer-motion",
      "nookies",
      "react-firebase-hooks",
      "tailwindcss",
      "swr",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/rohy",
    preview: "/assets/preview/Rohy.png",
    isPro: false,
  },
  {
    name: "Mirentymg",
    url: "https://mirentymg.vercel.app",
    date: {
      start: "mars 2023",
      end: "may 2023",
    },
    tech: [
      "next.js",
      "axios",
      "firebase",
      "firebase-admin",
      "tailwindcss",
      "swr",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/mirenty",
    preview: "/assets/preview/Mirentymg.png",
    isPro: false,
  },
  {
    name: "Hi-tafa",
    url: "https://hi-tafa.vercel.app",
    date: {
      start: "april 2023",
      end: null,
    },
    tech: [
      "next.js v13",
      "axios",
      "firebase",
      "firebase-admin",
      "tailwindcss",
      "swr",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/hi-tafa",
    preview: "/assets/preview/Hi-tafa.png",
    isPro: false,
  },
  {
    name: "Tubi",
    url: "https://tubi.vercel.app",
    date: {
      start: "jully 2023",
      end: null,
    },
    tech: [
      "next.js v13",
      "typescript",
      "tailwindcss",
      "firebase",
      "firebase-admin",
      "axios",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/tubi",
    preview: "/assets/preview/Tubi.png",
    isPro: false,
  },
  {
    name: "Groove-music-clone",
    url: "https://groove-music-clone.vercel.app",
    date: {
      start: "december 2023",
      end: null,
    },
    tech: [
      "next.js v14",
      "typescript",
      "next-themes",
      "shadcn",
      "clerk",
      "zustand",
      "tailwindcss",
      "vercel",
    ],
    git_repo: "https://github.com/randriamampionona/hi-tafa",
    preview: "/assets/preview/Groove-music-clone.png",
    isPro: false,
  },
];

export default function Projects({ id }: TProps) {
  const [activeTab, setActiveTab] = useState<Ttab>("all");

  const projectTab = useCallback(() => {
    if (activeTab == "professional") {
      return data.filter((project) => project.isPro);
    }
    if (activeTab == "personal") {
      return data.filter((project) => !project.isPro);
    }
    return data;
  }, [activeTab]);

  const onSwitch = (tab: Ttab) => {
    setActiveTab(tab);
  };

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projectTab().map((project) => (
                <ProjetcCard key={project.url} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </InViewProvider>
  );
}
