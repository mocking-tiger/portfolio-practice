import type { Metadata } from "next";
import { Do_Hyeon } from "next/font/google";
import "./globals.css";

const inter = Do_Hyeon({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sandy-ten-48.vercel.app"),
  title: "박준용입니다.",
  description: "항상 행복하세요.",
  openGraph: {
    images: [
      {
        url: "/profile.png",
        alt: "증명사진",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/profile.png",
        alt: "증명사진",
      },
    ],
  },
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
