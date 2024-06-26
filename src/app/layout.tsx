import { BookmarkProvider } from "@/contexts/BookmarkContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Netflix clone",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeProvider>
      <BookmarkProvider>
        <html lang="en">
          <body className="">
            <Navbar></Navbar>
            {children}
          </body>
        </html>
      </BookmarkProvider>
    </DarkModeProvider>
  );
}
