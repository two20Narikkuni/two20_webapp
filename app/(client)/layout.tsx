import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Two '20 - Empower Change with Just ₹20",
  description: "Join Athaani in making a difference. Donate ₹20 on the 2nd of every month to support those in need. Every contribution counts towards a better tomorrow.",
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
