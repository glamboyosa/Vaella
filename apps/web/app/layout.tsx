import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { NBS } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Vaella",
  description: "Private Audio Rant Rooms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(NBS.className)}>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
