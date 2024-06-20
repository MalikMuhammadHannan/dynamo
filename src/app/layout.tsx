import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
import InfoTag from "@/components/InfoTag";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamo Stitches",
  description:
    "Dynamo Stitches offers high-quality, custom embroidery and sewing services for individuals and businesses. From personalized apparel to promotional items, our skilled artisans bring your designs to life with precision and care. Discover endless possibilities with Dynamo Stitches for all your embroidery and sewing needs.",
};

// const surt = localFont({
//   src: [
//     { path: "./fonts/Michroma-regular.ttf", weight: "400", style: "normal" },
//   ],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  main bg-primary text-white`}>
        <InfoTag />
        <Navbar />
        <div className="lg:px-44 bg-primary  px-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
