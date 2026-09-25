import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "semantic-ui-css/semantic.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://bradfordrodgersfarmer.us";
const SITE_NAME = "Bradford Allen Rodgers-Farmer | Senior Software Engineer";
const SITE_DESCRIPTION =
  "Portfolio and resume of Bradford Allen Rodgers-Farmer, Senior Software Engineer at PEI, specializing in Next.js, cloud architecture, PCI-compliant checkout systems, and AI-powered tools.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Bradford Allen Rodgers-Farmer",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Bradford Allen Rodgers-Farmer",
    "Bradford Rodgers-Farmer",
    "Senior Software Engineer",
    "Next.js developer",
    "React developer",
    "PCI compliance",
    "cloud architecture",
    "PEI",
    "Fortune",
    "Fairygodboss",
    "Shoppable",
    "portfolio",
    "resume",
  ],
  authors: [{ name: "Bradford Allen Rodgers-Farmer", url: SITE_URL }],
  creator: "Bradford Allen Rodgers-Farmer",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: "Bradford Allen Rodgers-Farmer",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bradford Allen Rodgers-Farmer, Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@Bchaos567",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
