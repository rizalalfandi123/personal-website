import "./globals.css";

import { Navbar } from "./navbar";
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
          <Navbar />
          <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
