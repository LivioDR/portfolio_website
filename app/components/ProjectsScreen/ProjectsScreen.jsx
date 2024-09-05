import React from "react";
import ProjectsCard from "./ProjectCard/ProjectCard";
import projectsInfo from "@/app/utilities/projectsInfo";

const styles = {
    container: {
        width: '100%',
        padding: '5% 0%',
        backgroundColor: 'var(--main-color)',
        color: 'var(--light-main)',
    },
    title: {
        margin: '75px 0px',
        textAlign: 'center',
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
        <div style={styles.container}>
            <h1 style={styles.title}>Projects</h1>
            <div style={styles.carouselContainer}>
                {projectsInfo.map(projInfo =><ProjectsCard key={projInfo.name} info={projInfo}/>)}
            </div>
        </div>
    )
}
export default ProjectsScreen