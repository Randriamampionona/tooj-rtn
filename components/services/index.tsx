import HeadingSection from "@/components/heading-section";
import ServiceCard from "./service-card";
import { AppWindowIcon, GitFork, Server, WrenchIcon } from "lucide-react";
import InViewProvider from "@/providers/in-view-provider";

type TProps = {
  id: string;
};

const data = [
  {
    id: 1,
    Icon: GitFork,
    title: "Dev Ops",
    exerpt: "Efficient deployment strategies to optimize your web projects.",
    decription:
      "Navigating the digital skies demands more than just code; it requires a flawless flight plan. Let me orchestrate your project's takeoff with streamlined deployment strategies. From staging to launch, I ensure a smooth ascent into the digital stratosphere.",
  },
  {
    id: 2,
    Icon: AppWindowIcon,
    title: "UI/UX",
    exerpt: "Crafting captivating user experiences with stunning interfaces.",
    decription:
      "In a world where pixels tell stories, I craft digital landscapes that captivate and engage. Seamlessly blending art and functionality, I sculpt interfaces that guide users through immersive experiences, turning clicks into journeys.",
  },
  {
    id: 3,
    Icon: Server,
    title: "Database & Server",
    exerpt: "Building robust databases and servers for seamless functionality.",
    decription:
      "Foundations matter—the heartbeat of your application resides in its backend. I engineer robust databases and servers, fortifying your platform with reliability and agility, ensuring it stands firm amid digital tides.",
  },
  {
    id: 4,
    title: "Maintenance",
    Icon: WrenchIcon,
    exerpt:
      "Ensuring the continuous smooth operation of your web applications.",
    decription:
      "Building is just the beginning; the true testament lies in continuous refinement. I pledge to safeguard your digital domain, perpetually nurturing its performance to ensure an evergreen, top-tier user experience.",
  },
];

export default function Services({ id }: TProps) {
  return (
    <InViewProvider section_ID={id}>
      <section className="section gap-8" id={id}>
        <div className="text-center lg:text-start w-full lg:w-1/2">
          <HeadingSection heading="What do I offer?" />
          <p>
            Embark on a digital journey where deployment is flawless, interfaces
            weave tales, databases stand strong, and maintenance ensures a
            perpetual top-tier user experience. I&apos;m the navigator behind
            the scenes, crafting captivating experiences and fortifying your
            digital realm for seamless adventures.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </InViewProvider>
  );
}
