import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const SITE_URL = "https://jnnnnyao.github.io";
const title = "Jie-En (Matthew) Yao";
const description =
  "Jie-En (Matthew) Yao is a Ph.D. student in Computer Science at the University of Southern California, researching computer vision and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: "Jie-En Yao", url: SITE_URL }],
  creator: "Jie-En Yao",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: title,
    images: [{ url: "/me.JPG", alt: "Jie-En Yao" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/me.JPG"],
  },
  icons: {
    icon: "/orca_OpenMoji.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
