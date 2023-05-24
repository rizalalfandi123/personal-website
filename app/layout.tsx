import "./globals.css";

import { DesktopNavbar, navbarItems } from "./desktop-navbar";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";

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
        <Providers>
          <DesktopNavbar />
          <main className="max-w-screen-xl flex items-center justify-between mx-auto p-4 min-h-screen">{children}</main>
          <hr />
          <footer className="max-w-screen-xl flex gap-4 flex-col mx-auto p-4 md:flex-row">
            <div className="flex flex-col gap-2 md:grow-[2]">
              <h5 className="text-xl font-medium md:text-2xl">Rizal Alfandi</h5>
              <p className="text-foreground/60">Fullstack Web Developer</p>
            </div>

            <div className="flex md:grow-[1]">
              <div className="grow flex flex-col gap-2">
                <h6 className="font-medium">Contact</h6>

                <ul>
                  {["Email", "Whatsapp", "Telegram"].map((el) => {
                    return <li key={el}>{el}</li>;
                  })}
                </ul>
              </div>

              <div className="grow flex flex-col gap-2">
                <h6 className="font-medium">Sitemap</h6>

                <ul>
                  {navbarItems.map((el, index) => {
                    return <Link key={index} className="block" {...el} />
                  })}
                </ul>
              </div>
            </div>
          </footer>
        </Providers>

        <div className="w-64 h-64 sm:w-80 sm:h-80 fixed right-4 top-4 md:top-12 md:right-12 md:w-[500px] md:h-[500px] bg-cyan-400 rounded-full bg-opacity-30 blur-[120px] backdrop-blur-md z-[-1] dark:bg-cyan-500 dark:bg-opacity-50" />
        <div className="w-64 h-64 sm:w-80 sm:h-80 fixed left-4 bottom-8 md:left-12 md:bottom-16 md:w-[500px] md:h-[500px] bg-indigo-400 rounded-full bg-opacity-30 blur-[140px] backdrop-blur-md z-[-1] dark:bg-indigo-500 dark:bg-opacity-50" />
      </body>
    </html>
  );
}
