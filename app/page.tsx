import HeroSection from "@/components/hero-section";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

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
