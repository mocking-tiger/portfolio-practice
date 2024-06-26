import type { Metadata } from "next";
import { Do_Hyeon } from "next/font/google";
import "./globals.css";

const inter = Do_Hyeon({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "박준용입니다.",
  description: "항상 행복하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
