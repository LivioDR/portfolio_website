/**
 * TermoArgenta RPG
 * Dolar App
 * PokeBattle RPG
 * Who's That Poke?
 * CS Team Builder
 * LivioShop
 * PokeWeather
 * 
 */

const imgPath = '/assets/projects'

const projects = [
    {
        name: 'TermoArgenta RPG',
        desc: 'Full-stack Next.js RPG game with an AI-powered DM, custom APIs, deployed on Vercel, with analytics enabled on SpeedInsights, authentication and cloud saving on Firebase, containerized on Docker.',
        link: 'https://termoargentarpg.vercel.app/',
        img: `${imgPath}/termoargenta.png`,
        imgAlt: 'TermoArgenta screenshot',
        features: ['Next','Node.js','Firebase','Docker','Vercel','GitHub'],
    },
    {
        name: 'DolarApp',
        desc: 'Progressive Web Application developed in Next.js that displays all the different FX quotes for USD, CAD and AUS to ARS conversion based on client requirements. All data is retrieved from the CriptoYA Dollar API.',
        link: 'https://dolarapp.netlify.app/',
        img: `${imgPath}/dolarapp.png`,
        imgAlt: 'Dolar App logo',
        features: ['PWA','Next','Netlify','GitHub','CSS'],
    },
    {
        name: "Who's that poke?",
        desc: 'Responsive mobile-first "Guess the pokemon" game created on React.js and build as a PWA with Firebase authentication and data storage to save the progress for each player.',
        link: 'https://whosthatpoke.netlify.app/',
        img: `${imgPath}/whosthatpoke.png`,
        imgAlt: "Who's that poke screenshot",
        features: ['React','Bootstrap','Firebase','Netlify','jQuery','GitHub'],
    },
    {
        name: 'Test project 4',
        desc: 'My first description goes here. Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt pharetra neque commodo tristique penatibus enim. Luctus aliquet habitasse pharetra ante nascetur sodales. Laoreet lorem purus viverra sed, mi tempor iaculis interdum.',
        link: 'https://myDeploymentLink.com',
        img: '/placeholder-image.webp',
        imgAlt: '',
        features: ['React','Firebase','Docker','Vite','Netlify'],
    },
    {
        name: 'Test project 5',
        desc: 'My second description goes here. Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt pharetra neque commodo tristique penatibus enim. Luctus aliquet habitasse pharetra ante nascetur sodales. Laoreet lorem purus viverra sed, mi tempor iaculis interdum.',
        link: 'https://myDeploymentLink.com',
        img: '/placeholder-image.webp',
        imgAlt: '',
        features: ['Node.js','GitHub','HTML','CloudFlare','Gemini'],
    },
    {
        name: 'Test project 6',
        desc: 'My third description goes here. Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt pharetra neque commodo tristique penatibus enim. Luctus aliquet habitasse pharetra ante nascetur sodales. Laoreet lorem purus viverra sed, mi tempor iaculis interdum.',
        link: 'https://myDeploymentLink.com',
        img: '/placeholder-image.webp',
        imgAlt: '',
        features: ['Figma','Swift','CSS','Kotlin','Vercel','Next'],
    }
]
export default projects