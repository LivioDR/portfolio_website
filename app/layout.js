import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: "Livio Reinoso | Senior Front-End Developer & AI Software Engineer | London, ON",
  description: "Expert Senior Front-End Developer in London, Ontario, specializing in AI-powered web applications, React.js, Next.js, TypeScript, and SaaS development. Building fast, accessible, and scalable digital solutions that integrate cutting-edge AI for automation, chatbots, and business growth.",
  keywords: 'Front-End Developer London Ontario, AI Software Developer, React.js Developer, Next.js Expert, TypeScript Developer, AI-powered web applications, SaaS development, AI chatbot developer, scalable web solutions, Tailwind CSS, Vercel, Firebase, Figma UI/UX, Agile development, API development, front-end consultant',
  openGraph: {
    type: "website",
    url: "https://www.livioreinoso.com/",
    title: "Livio Reinoso | Senior Front-End Developer & AI Software Engineer",
    siteName: 'Livio Reinoso | Portfolio',
    description: "Senior Front-End Developer in London, Ontario, specializing in AI-powered web applications, React.js, Next.js, and SaaS development.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
      <Analytics/>
    </html>
  );
}
