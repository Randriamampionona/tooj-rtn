import "@/app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Toojrtn",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
