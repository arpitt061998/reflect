import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"]})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Reflect",
  description: "JOurnal",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0"/>
          <main className="min-h-screen">{children}</main>
          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="mx-auto px-4 text-center text-gray-900">
              <p>Made with ❤️ by Arpit Tiwari </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
