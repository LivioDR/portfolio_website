'use client'
import { useState, useEffect, useCallback, useRef } from "react";
import { Element } from 'react-scroll'
import Autoplay from "embla-carousel-autoplay"
import ProjectsCard from "./ProjectCard/ProjectCard";
import projectsInfo from "@/app/utilities/projectsInfo";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ProjectsScreen = () => {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollTo = useCallback(
        (index) => { api?.scrollTo(index) },
        [api],
    )

    return(
        <Element name="projects">
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section header */}
                    <div className="mb-16">
                        <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Portfolio</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
                            Selected Projects
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                            {"A curated selection of projects showcasing my expertise in full-stack development, AI integration, interactive mapping, UI/UX design, and progressive web applications. Each project reflects my commitment to building performant, user-centered digital solutions with modern technologies."}
                        </p>
                    </div>

                    {/* Carousel */}
                    <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4">
                            {projectsInfo.map(projInfo =>
                                <CarouselItem key={projInfo.name} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                    <ProjectsCard info={projInfo}/>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                    </Carousel>

                    {/* Carousel dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {projectsInfo.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-8 h-1.5 rounded-full transition-all duration-300 ${current === index ? 'bg-primary w-12' : 'bg-secondary hover:bg-muted-foreground/30'}`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default ProjectsScreen
