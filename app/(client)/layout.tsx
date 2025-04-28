import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import FacebookPixel from "../components/FacebookPixel/FacebookPixel";

export const metadata: Metadata = {
  title: "Two '20 - Empower Change with Just ₹20",
  description:
    "Join Athaani in making a difference. Donate ₹20 on the 2nd of every month to support those in need. Every contribution counts towards a better tomorrow.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Pixel goes high in the tree so it’s loaded once per page */}
        <FacebookPixel />

        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
