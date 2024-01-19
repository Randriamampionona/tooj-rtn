"use server";

import { project__data } from "@/data";
import { cache } from "react";

export default cache(async function getProject(
  params: TProjectType
): Promise<TProject[]> {
  const data = project__data;

  switch (params) {
    case "professional":
      return data.filter((res) => res.isPro === true);

    case "personal":
      return data.filter((res) => res.isPro !== true);

    default:
      return data.sort(() => Math.random() - 0.5);
  }
});
