import { ArrowRight } from "lucide-react";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import InViewProvider from "@/providers/in-view-provider";
import ContactDialog from "@/components/contact/contact-dialog";

type TProps = {
  id: string;
};

export default function HeroSection({ id }: TProps) {
  return (
    <InViewProvider section_ID={id}>
      <section
        className="flex flex-col items-center justify-start h-dscreen px-2 lg:px-4"
        id={id}
      >
        <div className="text-center w-full max-w-full md:max-w-2xl mt-24">
          <p className="text-muted-foreground">Welcome back👋, Trailblazer!</p>
          <h1 className="text_gradient text-5xl pb-4 font-bold">
            Crafting Seamless Experiences with Next.js Expertise
          </h1>
          <p>
            Hey there!{" "}
            <Hint label="RANDRIAMAMPIONONA Tojonirina">
              <span className="text-sky-600 font-bold cursor-default">
                Tooj
              </span>
            </Hint>{" "}
            here, a passionate <u>full-stack web developer</u> with a laser
            focus on harnessing the power of Next.js. My journey revolves around
            sculpting dynamic, high-performance web applications that harmonize
            intricate back-end functionalities with polished front-end finesse.
            Utilizing Next.js, I weave together lightning-fast, SEO-friendly,
            and scalable solutions that elevate user experiences to unparalleled
            heights.
          </p>
        </div>

        <ContactDialog
          dialogTitle="Let's Elevate Your Project"
          dialogTrigger={
            <Button className="button_gradient h-12 px-6 font-bold space-x-6 mt-8">
              <span>Let&apos;s Elevate Your Project</span>
              <ArrowRight size={17} />
            </Button>
          }
        />
      </section>
    </InViewProvider>
  );
}
