type TProject = {
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

type TProjectType = "professional" | "personal" | "all";
