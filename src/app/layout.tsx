import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akin Genc | Software Engineer",
  description: "Software engineer portfolio and GitHub projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
