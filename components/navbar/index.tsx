import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuSidebar from "@/components/menu-sidebar";
import ThemeToogle from "./theme-toogle";
import { Github } from "lucide-react";
import NavItem from "./navItem";
import HumburgerButton from "./humburger-button";

type TProps = {};

const navlinks = [
  {
    slug: "/#about-me",
    text: "About",
  },
  {
    slug: "/#services",
    text: "Services",
  },
  {
    slug: "/#skills",
    text: "Skills",
  },
  {
    slug: "/#projects",
    text: "Projects",
  },
  {
    slug: "/#contact",
    text: "Contact",
  },
];

export default function Navbar({}: TProps) {
  return (
    <>
      <MenuSidebar navlinks={navlinks} />

      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between wrapper h-12 bg-transparent backdrop-blur p-2 lg:px-4 z-10">
        <div>
          <Link href="/" className="font-extrabold text-xl">
            Tooj<span className="text-sky-600">.</span>
          </Link>
        </div>

        <ul className="flex-1 w-full hidden lg:flex items-center justify-center space-x-6">
          {navlinks.map((navitem) => (
            <NavItem key={navitem.slug} navitem={navitem} />
          ))}
        </ul>

        <div className="flex items-center space-x-2">
          <ThemeToogle />
          <Link
            href="https://github.com/@toojrtn"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="space-x-2">
              <Github size={20} />
              <p>GitHub</p>
            </Button>
          </Link>
          <HumburgerButton />
        </div>
      </nav>
    </>
  );
}
