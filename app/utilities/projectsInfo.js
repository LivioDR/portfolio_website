/**
 * PokeBattle RPG
 * CS Team Builder
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
        desc: 'Responsive mobile-first "Guess the pokemon" game created on React.js and build as a Progressive Web Application with Firebase authentication and data storage to save the progress for each player.',
        link: 'https://whosthatpoke.netlify.app/',
        img: `${imgPath}/whosthatpoke.png`,
        imgAlt: "Who's that poke screenshot",
        features: ['React','Bootstrap','Firebase','Netlify','jQuery','GitHub', 'PWA'],
    },
    {
        name: 'PokeWeather',
        desc: 'Responsive weather progressive web application that tracks the user location and localizes the data based on their browser language. Data retrieved from Open-Meteo and used to display a customized pokemon GIF based on the weather conditions.',
        link: 'https://nextpokeweather.netlify.app/',
        img: `${imgPath}/pokeweather.png`,
        imgAlt: 'PokeWeather app screenshot',
        features: ['Next','PWA','Netlify','GitHub'],
    },
    {
        name: 'LivioShop',
        desc: 'e-Commerce Single Page Application developed in React.js, feeded by the MercadoLibre API, with dynamic routing, auth and storage management implemented with Firebase',
        link: 'https://livioshop.netlify.app/',
        img: `${imgPath}/livioshop.png`,
        imgAlt: 'LivioShop screenshot',
        features: ['React','Firebase','Bootstrap','GitHub','Netlify'],
    },
    {
        name: 'NookBook',
        desc: 'Animal Crossing New Horizons companion-app protoype designed on Figma based on gathered and analyzed user data as a UI/UX case study. The project covered the whole design cycle including user personas, user flows, wireframes, functional prototypes and user testing.',
        link: 'https://www.figma.com/proto/GfMMzmGvD2O18r7sQchtGD?node-id=0-1&t=ZWinYyliNAypNsNG-6',
        img: `${imgPath}/nookbook.png`,
        imgAlt: 'NookBook screenshot',
        features: ['Figma'],
    },
    {
        name: 'PokeBattle RPG',
        desc: 'An idle RPG based on the retro Pokemon games from Gameboy Color, coded on React Native for mobile and Next for desktop, as a progressive web app. The player progress is stored in Firebase on a shared database between both apps.',
        link: 'https://pokebattlerpg.netlify.app/',
        img: `${imgPath}/pokebattle.png`,
        imgAlt: 'PokeBattle screenshot',
        features: ['React','expo','Firebase','GitHub','Netlify','PWA'],
    },
    {
        name: 'Portfolio site',
        desc: 'My own portfolio website created to display my projects and allow people who wants to connect to reach out easily. The website was created with Next.js, with a backend API hooked to MailSender to send messages to my inbox.',
        link: 'https://livioreinoso.com',
        img: `${imgPath}/portfolio.png`,
        imgAlt: 'Screenshot of this website',
        features: ['Next', 'Node.js','GitHub','CSS','Vercel']
    },
]
export default projects