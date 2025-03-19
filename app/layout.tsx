import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 

export const metadata: Metadata = {
  title: "Ahtisham Ul Haq | Portfolio",
  description: "Explore my portfolio showcasing React, Next.js, and Tailwind CSS projects.",
  generator: "Next.js",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
