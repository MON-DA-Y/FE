import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MONDAY",
  description: "moneyday, everyday!",
  keywords: ["경제", "교육", "중학생", "MONDAY"],

  openGraph: {
    title: "MONDAY",
    description: "moneyday, everyday!",
    url: "https://your-site.com", // 배포 url
    siteName: "MONDAY",
    images: [
      {
        url: "https://your-site.com/og-image.png", // 썸네일 url
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  icons: {
    icon: "/icons/favicon.ico",
    // shortcut: "/shortcut-icon.png",
    // apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximunScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body className="flex justify-center bg-white">
        <div className="w-[1133px] h-[744px] overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
