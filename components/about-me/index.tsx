import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeadingSection from "@/components/heading-section";
import AccumulationNumber from "./accumulation-number";
import { ArrowRight, Download, Info } from "lucide-react";
import ContactDialog from "./contact-dialog";
import ContactForm from "@/components/contact/contact-form";
import InViewProvider from "@/providers/in-view-provider";

type TProps = {
  id: string;
};

export default function AboutMe({ id }: TProps) {
  return (
    <InViewProvider section_ID={id}>
      <section className="section gap-8" id={id}>
        <div className="relative flex items-center justify-center w-full lg:w-1/2">
          <div className="flex items-center justify-center bg-gradient-to-r from-pink-600 to-orange-600 w-96 h-96 rounded-blob -z-10 overflow-hidden">
            <figure className="relative w-[25rem] h-[25rem] mx-auto">
              <Image
                src="/assets/me.png"
                alt="profile image"
                layout="fill"
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </figure>
          </div>
          <AccumulationNumber />
        </div>

        <div className="w-full text-center lg:text-start lg:w-1/2">
          <HeadingSection heading="More about me" />

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              My name is{" "}
              <span className="text-sky-600">RANDRIAMAMPIONONA Tojonirina</span>
              ,
            </h2>

            <p className="mb-2">
              I am <span className="underline italic">autodidact</span> explorer
              in the world of coding, I have embarked on a thrilling journey
              through web development, accumulating over{" "}
              <span className="underline italic">
                4 years of hands-on experience.
              </span>{" "}
              With more than 10 passion-fueled personal projects and successful
              completion of over 6 real-world ventures, I have honed my skills
              in both frontend and backend development, earning the stripes of a
              versatile <span className="underline italic">full-stack</span>{" "}
              developer.
            </p>

            <p className="mb-2">
              Driven by an insatiable curiosity, I navigate the ever-evolving
              tech landscape with enthusiasm, constantly seeking innovative
              solutions and embracing the{" "}
              <span className="underline italic">latest technologies.</span> My
              commitment to crafting seamless, user-centric experiences fuels my
              dedication to pixel-perfect design and robust functionality.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <ContactDialog
              dialogTrigger={
                <Button className="button_gradient h-12 px-6 font-bold space-x-6">
                  <span>Let's collaborate</span>
                  <ArrowRight size={17} />
                </Button>
              }
              dialogContent={
                <ContactForm
                  defaultState={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  className="w-full max-w-full"
                />
              }
            />

            <Link
              href={`${process.env
                .NEXT_PUBLIC_BASE_URL!}/assets/files/tojonirina-cv.pdf`}
              download="tojonirina-cv.pdf"
              prefetch={false}
            >
              <Button className="h-12 px-6 space-x-6">
                <span>Download my resume</span>
                <Download size={17} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </InViewProvider>
  );
}
