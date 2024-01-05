import HeadingSection from "@/components/heading-section";
import SkillCard from "./skill-card";
import InViewProvider from "@/providers/in-view-provider";

type TProps = {
  id: string;
};

const data = [
  {
    id: "html",
    name: "HTML",
    icon: "/assets/icons/html.png",
    rate: 95,
  },
  {
    id: "css",
    name: "CSS",
    icon: "/assets/icons/css.png",
    rate: 95,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/assets/icons/javascript.png",
    rate: 90,
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: "/assets/icons/typescript.png",
    rate: 80,
  },
  {
    id: "tailwindcss",
    name: "Tailwind",
    icon: "/assets/icons/tailwindcss.png",
    rate: 92,
  },
  {
    id: "nodejs",
    name: "Node.Js",
    icon: "/assets/icons/nodejs.png",
    rate: 86,
  },
  {
    id: "reactjs",
    name: "React.Js",
    icon: "/assets/icons/reactjs.png",
    rate: 89,
  },
  {
    id: "nextjs",
    name: "Next.Js",
    icon: "/assets/icons/nextjs.png",
    rate: 90,
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "/assets/icons/mysql.png",
    rate: 75,
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "/assets/icons/firebase.png",
    rate: 80,
  },
  {
    id: "wordpress",
    name: "Wordpress",
    icon: "/assets/icons/wordpress.png",
    rate: 70,
  },
  {
    id: "prestashop",
    name: "Prestashop",
    icon: "/assets/icons/prestashop.png",
    rate: 65,
  },
];

export default function Skills({ id }: TProps) {
  return (
    <InViewProvider section_ID={id}>
      <section className="section" id={id}>
        <div className="text-center">
          <HeadingSection heading="My skills" />

          <p className="max-w-2xl mx-auto mb-8">
            Crafting digital experiences is my forte—I blend HTML, CSS, and
            JavaScript artfully, infusing ES6+ and Typescript for dynamism. With
            Tailwind CSS, Node.js, React.js, and Next.js, I sculpt seamless
            interfaces that come to life. <br />
            Into the data realm, I dive, architecting with MySQL, harnessing
            Firebase's potential, and navigating WordPress and Prestashop
            ecosystems effortlessly. In this symphony of technology, creativity
            meets functionality, shaping visions into captivating digital
            realities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl">
            {data.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </InViewProvider>
  );
}
