import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"
import 'semantic-ui-css/semantic.min.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bradford Allen Rodgers-Farmer Personal site",
  description: "A list of projects and resume for Bradford Allen Rodgers-Farmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-P96R9CMZ70" />
    </html>
  );
}
