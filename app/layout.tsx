import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Tooj Rtn",
  description: "The one way solution to build your dream project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
