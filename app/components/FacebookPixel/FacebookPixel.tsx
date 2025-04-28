// components/FacebookPixel.tsx
"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq: (command: string, event: string, parameters?: any) => void;
  }
}

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID!;

// Helper to fire a pageview
export const pageview = () => {
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

export default function FacebookPixel() {
  const pathname = usePathname();

  // On every client-side navigation, re-fire a pageview
  useEffect(() => {
    pageview();
  }, [pathname]);

  return (
    <>
      {/* Load the Pixel script after the page is interactive */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Fallback for users without JavaScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
