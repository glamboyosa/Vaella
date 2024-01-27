import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";
import { NBS } from "@/lib/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

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
        <ApolloWrapper>
          <ThemeProvider
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            attribute="class"
          >
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
