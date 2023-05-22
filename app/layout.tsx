import "./globals.css";

import { DesktopNavbar } from "./desktop-navbar";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Rizal Alfandi",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers >
          <DesktopNavbar />
          <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">{children}</main>
        </Providers>

        <div className="w-64 h-64 sm:w-80 sm:h-80 fixed right-4 top-4 md:top-12 md:right-12 md:w-[500px] md:h-[500px] bg-cyan-400 rounded-full bg-opacity-30 blur-[120px] backdrop-blur-md z-[-1] dark:bg-cyan-500 dark:bg-opacity-50" />
        <div className="w-64 h-64 sm:w-80 sm:h-80 fixed left-4 bottom-8 md:left-12 md:bottom-16 md:w-[500px] md:h-[500px] bg-indigo-400 rounded-full bg-opacity-30 blur-[140px] backdrop-blur-md z-[-1] dark:bg-indigo-500 dark:bg-opacity-50" />
      </body>
    </html>
  );
}
