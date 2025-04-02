import { Merriweather } from "next/font/google";
import "./globals.css";

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Livio Reinoso | AI-Powered Front-End Developer | React.js & Next.js Expert in London, ON",
  description: "Expert Front-End Developer in London, Ontario, specializing in AI-powered web applications, React.js, Next.js, and SaaS development. I help businesses integrate AI-driven solutions for automation, chatbots, and scalable software. Let's build the future of web applications together!",
  keywords: 'Front-End Developer in London Ontario, AI Software Developer London ON, React.js Developer London Ontario, Expert in AI-powered web applications, Custom Next.js and TypeScript development, AI chatbot developer for businesses, Web developer specializing in AI integration, SaaS front-end development expert, React.js, Next.js, TypeScript, Tailwind CSS, AI integration with OpenAI & Gemini AI, Serverless development with Vercel & Firebase, Zod validation, Jest testing, Shadcn UI components, Figma for UI/UX prototyping & design, Google Apps Script automation & CRM integration, Agile development, JIRA sprint management, API development & secure data handling, Best AI web developer in London ON, Software consultant for startups in Ontario, Freelance front-end developer in Canada, SaaS application development in Ontario, AI-driven automation solutions for businesses, MedTech and healthcare software solutions, AI-enabled front-end solutions expert, React & Next.js consultant for businesses, Custom AI chatbot and search bot developer, Cutting-edge software development with AI, Scalable and secure SaaS front-end development',
  image: './../MetadataLivioPhoto.jpg',
  openGraph: {
    type: "website",
    url: "https://www.livioreinoso.com/",
    title: "Livio Reinoso - AI-Powered Front-End Developer | React.js & Next.js Expert in London, ON",
    siteName: 'Livio Reinoso - AI-Powered Front-End Developer | React.js & Next.js Expert in London, ON',
    description: "Expert Front-End Developer in London, Ontario, specializing in AI-powered web applications, React.js, Next.js, and SaaS development. I help businesses integrate AI-driven solutions for automation, chatbots, and scalable software. Let's build the future of web applications together!",
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
