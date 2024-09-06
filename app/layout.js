import { Merriweather } from "next/font/google";
import "./globals.css";

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Livio Reinoso - Front-End & Mobile Developer",
  description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
  image: './../MetadataLivioPhoto.jpg',
  openGraph: {
    type: "website",
    url: "https://www.livioreinoso.com/",
    title: "Livio Reinoso - Front-End & Mobile Developer",
    siteName: 'Livio Reinoso - Front-End & Mobile Developer',
    description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
    image: './../MetadataLivioPhoto.jpg',
    images: [{
      url: './../MetadataLivioPhoto.JPG',
      width: 1200,
      height: 630,
    }]
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merry.className}>{children}</body>
    </html>
  );
}
