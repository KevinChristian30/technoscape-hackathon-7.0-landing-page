import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { CookiesProvider } from "next-client-cookies/server";
import { Toaster } from "@/components/ui/Toaster";
import { TopLoaderProvider } from "@/providers/TopLoaderProvider";

const font = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyHelpdesk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <CookiesProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TopLoaderProvider>{children}</TopLoaderProvider>
            </ThemeProvider>
        </CookiesProvider>
        <Toaster />
      </body>
    </html>
  );
}
