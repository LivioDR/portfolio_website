import React from "react";
import ProjectsCard from "./ProjectCard/ProjectCard";
import projectsInfo from "@/app/utilities/projectsInfo";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import '../../globals.css'

const styles = {
    container: {
        color: 'var(--light-main)',
        background: 'var(--dark-gradient)',
    }
}

const ProjectsScreen = () => {

    return(
        <div style={styles.container} id="projects" className="w-full p-0 pb-[150px]">
            <h2 className="mt-[150px] mb-[75px] text-4xl text-center">Projects</h2>
            <Carousel>
                <CarouselContent className="mx-auto">
                    {projectsInfo.map(projInfo =>
                        <CarouselItem key={projInfo.name} className="p-0">
                            <ProjectsCard info={projInfo}/>
                        </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
export default ProjectsScreen