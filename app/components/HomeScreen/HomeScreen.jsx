'use client'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const skills = [
    'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
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
                                    {"I'm Livio Reinoso, a Senior Front-End Developer and AI Software Engineer based in London, Ontario. With a deep focus on React.js, Next.js, and TypeScript, I craft fast, accessible, and scalable digital products that bring real value to businesses and their users."}
                                </p>
                                <p className="opacity-0 animate-fade-in-up animate-delay-300">
                                    {"My expertise lies at the intersection of modern front-end development and artificial intelligence. From building AI-powered chatbots and search engines to developing SaaS platforms that streamline complex business operations, I approach every project with a user-centered, performance-focused mindset."}
                                </p>
                                <p className="opacity-0 animate-fade-in-up animate-delay-400">
                                    {"Whether it's translating pixel-perfect Figma designs into production-ready code, integrating OpenAI and Gemini AI APIs for intelligent automation, or architecting serverless solutions on Vercel and Firebase, I bring the technical depth and creative problem-solving needed to deliver outstanding digital experiences."}
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
                                    src={"/LivioPhoto.jpg"}
                                    alt="Modern developer workspace with ambient lighting and code on dual monitors"
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
