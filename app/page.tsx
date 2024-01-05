import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";

type TProps = {};

export default function LadingPage({}: TProps) {
  return (
    <>
      <HeroSection id="hero-section" />
      <AboutMe id="about-me" />
      <Services id="services" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
}
