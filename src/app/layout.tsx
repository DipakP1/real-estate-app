import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./page.module.css";
import ClientWrapper from "./(DashboardLayout)/components/clientWrapper/ClientWrapper";
import { Chicle } from "next/font/google";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const APP_NAME = "PWA-Dashboard App";
const APP_DEFAULT_TITLE = "PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  // appleWebApp: {
  //   capable: true,
  //   statusBarStyle: "default",
  //   title: APP_DEFAULT_TITLE,
  //   // startUpImage: [],
  // },
  formatDetection: {
    telephone: false,
  },
  // openGraph: {
  //   type: "website",
  //   siteName: APP_NAME,
  //   title: {
  //     default: APP_DEFAULT_TITLE,
  //     template: APP_TITLE_TEMPLATE,
  //   },
  //   description: APP_DESCRIPTION,
  // },
  // twitter: {
  //   card: "summary",
  //   title: {
  //     default: APP_DEFAULT_TITLE,
  //     template: APP_TITLE_TEMPLATE,
  //   },
  //   description: APP_DESCRIPTION,
  // },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
