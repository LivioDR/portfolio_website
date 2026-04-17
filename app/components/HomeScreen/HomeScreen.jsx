'use client'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const skills = [
    'React.js', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'AI Integration', 'Firebase', 'Docker', 'Figma', 'Vercel'
]

const HomeScreen = () => {
    return(
        <Element name="about-me">
            <section className="relative min-h-screen flex items-center pt-16">
                {/* Subtle background glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
                    <div className="flex items-start gap-12 lg:gap-16">
                        {/* Text content - full width on mobile, 2/3 on desktop */}
                        <div className="w-full lg:w-2/3">
                            {/* Tagline */}
                            <p className="text-sm font-mono text-primary tracking-wider uppercase mb-6 opacity-0 animate-fade-in-up">
                                Senior Front-End Developer & AI Engineer
                            </p>

                            {/* Main heading */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-glow text-balance opacity-0 animate-fade-in-up animate-delay-100">
                                Building intelligent, scalable web experiences
                            </h1>

                            {/* Body paragraphs - SEO rich */}
                            <div className="mt-8 flex flex-col gap-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                                <p className="opacity-0 animate-fade-in-up animate-delay-200">
                                    {"I'm Livio Reinoso, a Senior Front-End Developer and AI Software Engineer based in Buenos Aires, Argentina, with a global mindset shaped by collaborating with distributed teams across North America and beyond, with strong experience working alongside professionals in Canada and the United States. I specialize in building fast, accessible, and scalable digital products that create measurable value for businesses and their users."}
                                </p>
                                <p className="opacity-0 animate-fade-in-up animate-delay-300">
                                    {"My expertise sits at the intersection of modern front-end engineering and artificial intelligence. With deep experience in React.js, Next.js, and TypeScript, I build high-performance web applications, AI-powered chatbots, intelligent search experiences, and SaaS platforms that simplify complex operations and improve user engagement."}
                                </p>
                                <p className="opacity-0 animate-fade-in-up animate-delay-400">
                                    {"Whether translating pixel-perfect Figma designs into production-ready code, integrating OpenAI and Gemini APIs for smart automation, or architecting modern cloud solutions with Vercel and Firebase, I bring the technical depth, adaptability, and product thinking required to deliver world-class digital experiences for international teams and markets."}
                                </p>
                            </div>

                            {/* Skills pills */}
                            <div className="mt-10 flex flex-wrap gap-2 opacity-0 animate-fade-in-up animate-delay-400">
                                {skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 text-xs font-mono text-primary border border-primary/20 rounded-full bg-primary/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-12 opacity-0 animate-fade-in-up animate-delay-400">
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors cursor-pointer text-sm"
                                >
                                    {"Let's work together"}
                                    <ArrowDown size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Hero image - hidden on mobile, rounded on tablet, right 1/3 on desktop */}
                        <div className="hidden md:block md:w-1/3 lg:w-1/3 shrink-0 opacity-0 animate-fade-in-up animate-delay-300">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl mt-12">
                                <Image
                                    src={"/LivioPhoto.JPG"}
                                    alt="Livio David Reinoso picture"
                                    fill
                                    unoptimized
                                    priority
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 0vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default HomeScreen
