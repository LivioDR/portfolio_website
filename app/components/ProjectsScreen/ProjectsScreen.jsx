import React from "react";
import ProjectsCard from "./ProjectCard/ProjectCard";
import projectsInfo from "@/app/utilities/projectsInfo";
import '../../globals.css'

const styles = {
    container: {
        width: '100%',
        padding: '0% 0%',
        color: 'var(--light-main)',
        background: 'var(--dark-gradient)',
        paddingBottom: '150px',
    },
    title: {
        margin: '150px 0px 75px 0px',
        textAlign: 'center',
        fontSize: '2.5em',
    },
    carouselContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflowX: 'scroll',
        margin: '3% auto',
        height: '100%',
    }
}

const ProjectsScreen = () => {

    return(
        <div style={styles.container} id="projects">
            <h2 style={styles.title}>Projects</h2>
            <div style={styles.carouselContainer}>
                {projectsInfo.map(projInfo =><ProjectsCard key={projInfo.name} info={projInfo}/>)}
            </div>
        </div>
    )
}
export default ProjectsScreen