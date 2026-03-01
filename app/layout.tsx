import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jie-En (Matthew) Yao",
  description:
    "Jie-En (Matthew) Yao is a Ph.D. student in Computer Science at the University of Southern California. His research focuses on machine learning and computer vision.",
  icons: {
    icon: "/orca_OpenMoji.svg",
  },
  authors: [{ name: "Jie-En (Matthew) Yao" }],
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
