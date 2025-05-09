import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ——— Fuentes ——— */}
        <title>Magis Marketing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* ——— Google Analytics (GA4 – propiedad G-K6DC2BXRLH) ——— */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K6DC2BXRLH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K6DC2BXRLH');
          `}
        </Script>

        {/* ——— Google Ads (Conversiones AW-10884549220) ——— */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10884549220"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10884549220');
          `}
        </Script>

        {/* ——— Meta Pixel (ID 9833517280039193) ——— */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9833517280039193');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Noscript de respaldo para navegadores sin JS */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9833517280039193&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <body className="antialiased font-sans bg-light dark:bg-main text-main dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
