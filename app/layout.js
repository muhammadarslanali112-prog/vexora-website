import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Vexora Visual | Sound Needs a Face",
  description: "Music marketing, cover arts, posters, AI visuals & videos for artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}