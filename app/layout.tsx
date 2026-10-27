import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import rawData from "@/data/templates.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CalmPath - Health Counselor",
  description: "Professional mental health counseling and behavioral support.",
  icons: {
    icon: '/main logo/logo.webp',
    shortcut: '/main logo/logo.webp',
    apple: '/main logo/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontConfig = rawData?.common?.fonts;
  const primaryFont = fontConfig?.primary || 'Poppins';
  const headingFont = fontConfig?.heading || 'Georgia';

  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} font-sans antialiased`}
        style={{
          ['--font-primary' as string]: primaryFont === 'Poppins' ? 'var(--font-poppins), sans-serif' : primaryFont,
          ['--font-heading' as string]: headingFont === 'Georgia' ? 'Georgia, serif' : headingFont,
        }}
      >
        {children}
      </body>
    </html>
  );
}

