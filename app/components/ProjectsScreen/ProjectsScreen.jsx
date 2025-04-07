'use client'
import { useState, useEffect, useCallback, useRef } from "react";
import { Element } from 'react-scroll'
import Autoplay from "embla-carousel-autoplay"
import ProjectsCard from "./ProjectCard/ProjectCard";
import projectsInfo from "@/app/utilities/projectsInfo";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils"
import '../../globals.css'

const styles = {
    container: {
        color: 'var(--light-main)',
        background: 'var(--dark-gradient)',
    }
}

const ProjectsScreen = () => {

    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
        return
        }

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollTo = useCallback(
        (index) => {
        api?.scrollTo(index)
        },
        [api],
    )

    return(
        <Element style={styles.container} name="projects" className="w-full p-0 pb-[150px]">
            
            <h2 className="mt-[150px] mb-[50px] md:mb-[75px] text-4xl text-center">Projects</h2>
            
            {/* Carousel Container */}
            <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="mx-auto">
                    {projectsInfo.map(projInfo =>
                        <CarouselItem key={projInfo.name} className="p-0">
                            <ProjectsCard info={projInfo}/>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>

            {/* Carousel Controllers */}
            <div style={styles.container} className="flex justify-center gap-2 mt-8 max-w-min mx-auto">
            {projectsInfo.map((_, index) => (
                <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn("w-8 md:w-12 h-1.5 rounded-full transition-colors", current === index ? "bg-[#FDC05D]" : "bg-[#D4C2FC]")}
                aria-label={`Go to slide ${index + 1}`}
                />
            ))}
            </div>
        </Element>
    )
}
export default ProjectsScreen