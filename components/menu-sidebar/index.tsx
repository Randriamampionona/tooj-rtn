"use client";

import Link from "next/link";
import NavItem from "@/components/navbar/navItem";
import CloseMenuSidebarBtn from "./close-menu-sidebar-btn";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact/contact-dialog";
import { ArrowRight, Download } from "lucide-react";
import { menuStore } from "@/store/menu.store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type TProps = {
  navlinks: {
    slug: string;
    text: string;
  }[];
};

export default function MenuSidebar({ navlinks }: TProps) {
  const { isOpen, setIsOpen } = menuStore((state) => state);
  const router = useRouter();

  const onNavigate = () => {
    router.push("/");
    setIsOpen();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-950/50 z-20"
          onClick={() => setIsOpen()}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 -right-80 flex flex-col justify-between w-full max-h-[100dvh] h-full max-w-xs p-4 bg-slate-50 dark:bg-neutral-950 space-y-12 z-30",
          isOpen && "right-0 transition-all duration-150"
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="font-extrabold text-xl cursor-pointer"
              onClick={onNavigate}
            >
              Tooj<span className="text-sky-600">.</span>
            </h1>
          </div>
          <CloseMenuSidebarBtn />
        </div>

        <div className="flex-1 flex flex-col">
          <ul className="flex flex-col space-y-6">
            {navlinks.map((navitem) => (
              <NavItem key={navitem.slug} navitem={navitem} />
            ))}
          </ul>

          <div className="flex-1 flex flex-col justify-end space-y-4">
            <ContactDialog
              dialogTitle="Let's collaborate"
              dialogTrigger={
                <Button className="button_gradient h-12 px-6 font-bold space-x-6">
                  <span>Let&apos;s collaborate</span>
                  <ArrowRight size={17} />
                </Button>
              }
            />

            <Link
              href={`${process.env
                .NEXT_PUBLIC_BASE_URL!}/assets/files/tojonirina-cv.pdf`}
              download="tojonirina-cv.pdf"
              prefetch={false}
            >
              <Button className="h-12 w-full px-6 space-x-6">
                <span>Download my resume</span>
                <Download size={17} />
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
