import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cl from "classnames";

const inter = Inter({ subsets: ["latin"] });

 export const metadata: Metadata = {
  title: "enter my portfolio",
  description: "created by Yunus",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cl(inter.className, 'relative')}>
        {children}
      </body>
    </html>
  );
}

