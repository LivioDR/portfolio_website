import { Merriweather } from "next/font/google";
import "./globals.css";

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Livio Reinoso - Front-End & Mobile Developer",
  description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My expertise lies in automating and streamlining operations across departments, including maintenance, sales, finance, and marketing, by developing tools using technologies such as React.js, HTML, CSS, JavaScript, Google Apps Script, and CRM tools like SalesForce and Hubspot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merry.className}>{children}</body>
    </html>
  );
}
