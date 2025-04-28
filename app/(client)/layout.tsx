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
        {/* Meta Pixel Code - Initial Script Part */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2687151854801726');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Meta Pixel Code - NoScript Fallback */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2687151854801726&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <Header />
        <main>{children}</main> {/* Optional: Wrap children in <main> */}
        {/* <Footer/> */}
      </body>
    </html>
  );
}