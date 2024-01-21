"use client";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ooops, Something went wrong!",
  description:
    "Uh-oh, looks like there's been a hiccup. Don't worry, just give the page a quick refresh and it'll be back to normal in no time. If the problem persist, let me know, and I'll do my best to fix it. Thanks for bearing with me!",
};

export default function ErrorPage() {
  const onRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="section min-h-dscreen">
      <div className="flex flex-col items-center justify-center w-full max-w-full md:max-w-2xl space-y-2">
        <h1 className="text-center text-xl font-semibold">
          Ooops, Something went wrong!
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          Uh-oh, looks like there&apos;s been a hiccup. Don&apos;t worry, just
          give the page a quick{" "}
          <span className="italic cursor-pointer" onClick={onRefresh}>
            refresh
          </span>{" "}
          and it&apos;ll be back to normal in no time and if the problem
          persist, let me know, and I&apos;ll do my best to fix it. Thanks for
          bearing with me!
        </p>

        <Button onClick={onRefresh}>Refresh this page</Button>
      </div>
    </div>
  );
}
