import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--noto-sans-jp",
});

export const metadata: Metadata = {
  title: "orange-na",
  description: "orange-na",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
