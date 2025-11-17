import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "কুরিয়ার চেকার - ডেলিভারি রেশিও",
  description: "Steadfast ও Pathao থেকে কাস্টমারের ডেলিভারি রেশিও চেক করুন",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
