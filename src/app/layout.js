import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amr Ismail",
  description: "Amr Ismail portfolio",

icons: {
  icon: "/favicon.ico",
  apple: "/apple-icon.png",
  shortcut: "/favicon.ico",
}
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}