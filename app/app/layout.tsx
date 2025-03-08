import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serkan Yılmaz",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
