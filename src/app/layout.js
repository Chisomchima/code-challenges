import { Sora } from "next/font/google";
import "./globals.css";
import LayoutHook from "../components/ui/use-layout";
const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Devspax",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LayoutHook>{children}</LayoutHook>
      </body>
    </html>
  );
}
