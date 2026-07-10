import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const title = "Compressor | Smaller images, locally";
const description =
  "Convert common image formats to lightweight WebP files with a focused native app for macOS and Windows.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/compressor-icon.png",
      shortcut: "/compressor-icon.png",
      apple: "/compressor-icon.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: ogImage, width: 1728, height: 909, alt: "Compressor app preview" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
