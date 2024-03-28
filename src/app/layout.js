import { Inter, Shanti, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const shanti = Shanti({ subsets: ["latin"], weight: ["400"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Skaili",
  description: "Business digitalitzation agency",
  content: "Skaili is a digitalization agency focused on helping you achieve the digitalitzation of your business, in a time record with our specialized team. All prepared to make your business more scalable."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black overflow-hidden`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
