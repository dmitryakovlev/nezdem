import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

import NavBar from '@/components/NavBar';
import './globals.css';

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

// export const metadata: Metadata = {
//   metadataBase: new URL('https://nezdemkovski.com'),
//   title: {
//     default: 'Yuri Nezdemkovski',
//     template: '%s | Yuri Nezdemkovski',
//   },
//   description:
//     'I am Yuri — a seasoned web developer with over 10 years of experience. Now, as a developer manager, I am passionate about leading teams and delivering top-notch results.',
//   openGraph: {
//     title: 'Yuri Nezdemkovski',
//     description:
//       'I am Yuri — a seasoned web developer with over 10 years of experience. Now, as a developer manager, I am passionate about leading teams and delivering top-notch results.',
//     url: 'https://nezdemkovski.com',
//     siteName: 'Yuri Nezdemkovski',
//     images: [
//       {
//         url: 'https://nezdemkovski.com/og.png',
//         width: 1200,
//         height: 628,
//       },
//     ],
//     locale: 'en-US',
//     type: 'website',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   twitter: {
//     title: 'Yuri Nezdemkovski',
//     card: 'summary_large_image',
//   },
//   icons: {
//     icon: '/favicons/favicon-96x96.ico',
//     shortcut: '/favicons/favicon.ico',
//     apple: [
//       { url: '/favicons/apple-icon.png' },
//       {
//         url: '/favicons/apple-icon-57x57.png',
//         sizes: '57x57',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-60x60.png',
//         sizes: '60x60',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-72x72.png',
//         sizes: '72x72',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-76x76.png',
//         sizes: '72x72',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-114x114.png',
//         sizes: '114x114',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-120x120.png',
//         sizes: '120x120',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-144x144.png',
//         sizes: '144x144',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-152x152.png',
//         sizes: '152x152',
//         type: 'image/png',
//       },
//       {
//         url: '/favicons/apple-icon-180x180.png',
//         sizes: '180x180',
//         type: 'image/png',
//       },
//     ],
//     other: {
//       rel: 'apple-touch-icon-precomposed',
//       url: '/favicons/apple-touch-icon-precomposed.png',
//     },
//   },
//   verification: {
//     other: {
//       me: ['https://mastodon.social/@nezdemkovski'],
//     },
//   },
// };

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={clsx('bg-zinc-100 dark:bg-zinc-900', montserrat.variable)}
    >
      <head />
      <body className="font-montserrat text-zinc-800 dark:text-zinc-100">
        <div className="flex justify-center px-4 md:px-5">
          <div className="w-full max-w-[83.75rem]">
            <NavBar />
            {children}
          </div>
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
