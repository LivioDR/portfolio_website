import { Merriweather } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import metadataImg from './../public/MetadataLivioPhoto.JPG'

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Livio Reinoso - Front-End & Mobile Developer",
  description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
  image: metadataImg,
  openGraph: {
    type: "website",
    url: "https://www.livioreinoso.com/",
    title: "Livio Reinoso - Front-End & Mobile Developer",
    siteName: 'Livio Reinoso - Front-End & Mobile Developer',
    description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
    image: metadataImg,
    images: [{
      url: './../public/MetadataLivioPhoto.JPG',
      width: 800,
      height: 600,
    }]
    },
  
  twitter: {
    card: 'summary_large_image',
    url: 'https://www.livioreinoso.com/',
    title: "Livio Reinoso - Front-End & Mobile Developer",
    description: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
    image: metadataImg,
  },

  ['og:type']: "website",
  ['og:url']: "https://www.livioreinoso.com/",
  ['og:title']: "Livio Reinoso - Front-End & Mobile Developer",
  ['og:description']: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
  ['og:image']: metadataImg,

  ['twitter:card']: "summary_large_image",
  ['twitter:url']: "https://www.livioreinoso.com/",
  ['twitter:title']: "Livio Reinoso - Front-End & Mobile Developer",
  ['twitter:description']: "I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.",
  ['twitter:image']: metadataImg,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Livio Reinoso - Front-End & Mobile Developer</title>
        <meta name="title" content="Livio Reinoso - Front-End & Mobile Developer" />
        <meta name="description" content="I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.livioreinoso.com/" />
        <meta property="og:title" content="Livio Reinoso - Front-End & Mobile Developer" />
        <meta property="og:description" content="I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake." />
        <meta property="og:image" content={metadataImg} />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.livioreinoso.com/" />
        <meta name="twitter:title" content="Livio Reinoso - Front-End & Mobile Developer" />
        <meta name="twitter:description" content="I am a Front-End and Mobile Developer and Biomedical Engineer, based in London, Ontario. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake." />
        <meta name="twitter:image" content={metadataImg} />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Head>
      <body className={merry.className}>{children}</body>
    </html>
  );
}
