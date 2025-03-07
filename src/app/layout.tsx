import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Nunito_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionSeparator } from "@/components/section-separator";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/context/i18n-provider";
import { LoadingProvider } from "@/context/loading-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export const metadata: Metadata = {
  title: "Jonathan García - Full-Stack Developer",
  description: "Jonathan García - Full-Stack Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <I18nProvider>
              <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </I18nProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
