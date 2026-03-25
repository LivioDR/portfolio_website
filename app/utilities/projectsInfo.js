const imgPath = '/assets/projects'

const projects = [
    {
        name: 'Kainotera | AI Solutions',
        desc: 'A professional B2B website for a company providing AI-powered solutions to businesses. Built with Next.js and TypeScript, it features a responsive design system with Tailwind CSS, a backend API integration with MailerSend for automated lead capture, and optimized performance through server-side rendering and Vercel edge deployment.',
        link: 'https://kainotera.com.ar',
        img: `${imgPath}/kainotera.png`,
        imgAlt: 'Kainotera AI Solutions website showing hero section with modern design',
        features: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel'],
    },
    {
        name: 'Riopaila | Crop Monitoring System',
        desc: 'An interactive web application for monitoring and managing agricultural crop performance at scale. Users can visualize fields on a satellite map with color-coded health indicators powered by Leaflet.js, explore historical data trends, generate exportable CSV and PDF reports, and manage team access through Clerk authentication with full user and activity logging.',
        link: 'https://riopaila-prototipo.vercel.app/',
        img: `${imgPath}/riopaila.png`,
        imgAlt: 'Crop monitoring dashboard with interactive satellite map and field analytics',
        features: ['Next.js', 'TypeScript', 'Leaflet', 'Tailwind CSS', 'Clerk', 'Vercel'],
    },
    {
        name: 'TermoArgenta RPG',
        desc: 'A full-stack AI-driven RPG game featuring a Gemini-powered Dungeon Master that generates dynamic storylines and encounters in real time. Built on Next.js with Firebase for authentication and cloud save functionality, the application is containerized with Docker for consistent deployment and includes Vercel SpeedInsights for performance monitoring.',
        link: 'https://rpg.livioreinoso.com/',
        img: `${imgPath}/termoargenta.png`,
        imgAlt: 'TermoArgenta RPG game interface with AI-generated narrative and character stats',
        features: ['Next.js', 'Node.js', 'Firebase', 'Docker', 'Gemini AI'],
    },
    {
        name: 'YWCA Delaware',
        desc: 'Collaborated with YWCA Delaware to modernize their Squarespace website by implementing new content sections, custom graphics, and refined style customizations. The project focused on improving layout consistency, information architecture, and overall user experience to better serve their community outreach mission.',
        link: 'https://www.ywcade.org/',
        img: `${imgPath}/ywcade.png`,
        imgAlt: 'YWCA Delaware website redesign with improved layout and content organization',
        features: ['HTML', 'CSS', 'Squarespace'],
    },
    {
        name: 'DolarApp',
        desc: 'A Progressive Web Application built with Next.js that displays real-time foreign exchange quotes for USD, CAD, and AUD to ARS conversions. Sourcing live market data from the CriptoYA API, the app supports offline access, mobile-first design, and installability as a native-like experience on any device.',
        link: 'https://dolar.livioreinoso.com/',
        img: `${imgPath}/dolarapp.png`,
        imgAlt: 'DolarApp interface showing live currency exchange rates for Argentine Peso',
        features: ['PWA', 'Next.js', 'CSS', 'Netlify'],
    },
    {
        name: 'NookBook',
        desc: 'A comprehensive UI/UX case study and companion-app prototype for Animal Crossing: New Horizons, designed in Figma. The project covered the full design cycle from user research and persona creation through wireframing, interactive prototyping, and usability testing, resulting in an intuitive interface grounded in real player data and behavioral insights.',
        link: 'https://www.figma.com/proto/GfMMzmGvD2O18r7sQchtGD?node-id=0-1&t=ZWinYyliNAypNsNG-6',
        img: `${imgPath}/nookbook.png`,
        imgAlt: 'NookBook Figma prototype showing companion app screens for Animal Crossing',
        features: ['Figma', 'UI/UX'],
    },
    {
        name: 'Portfolio Website',
        desc: 'This very portfolio site, engineered with Next.js and deployed on Vercel with Cloudflare DNS for optimal global performance. It features a modern dark theme, smooth scroll navigation, an embla-powered project carousel, and an integrated contact form backed by MailerSend for direct message delivery.',
        link: 'https://livioreinoso.com',
        img: `${imgPath}/portfolio.png`,
        imgAlt: 'Livio Reinoso portfolio website with dark theme and modern design',
        features: ['Next.js', 'Node.js', 'Tailwind CSS', 'Vercel', 'CloudFlare'],
    },
]
export default projects
