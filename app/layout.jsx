import { Nunito } from "next/font/google";
import "./globals.css";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// theme
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollUp } from "@/components/ScrollUp";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "SF Portofolio",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
          <ScrollUp />
        </ThemeProvider>
      </body>
    </html>
  );
}
