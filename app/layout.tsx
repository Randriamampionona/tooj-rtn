import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import Blobs from "@/components/blobs";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Tooj Rtn (RANDRIAMAMPIONONA Tojonirina)",
  description: "The one way solution to build your dream project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Blobs />
          <Toaster position="bottom-right" />
          <main className="wrapper pt-12 space-y-20 lg:space-y-0">
            {children}
          </main>
          <Footer className="mt-20 lg:mt-0" />
        </ThemeProvider>
      </body>
    </html>
  );
}
