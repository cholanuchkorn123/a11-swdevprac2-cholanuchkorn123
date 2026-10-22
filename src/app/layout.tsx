import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "where every event finds its venue",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased pt-[60px]">
        <NextAuthProvider session={nextAuthSession}>
          <ReduxProvider>
            <TopMenu />
            {props.children}
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
