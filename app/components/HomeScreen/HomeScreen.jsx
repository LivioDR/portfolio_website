'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import Title from "./Title";
import BodyText from "./BodyText";
import CTAButton from "./CTAButton";
import BodyImage from "./BodyImage";

const EXPERIENCE_YEARS = Number(new Date().getFullYear()) - 2020

const bodyText = `I'm a Front-End Developer and AI Software Engineer based in London, Ontario 🇨🇦 specializing in scalable web applications, AI chatbot development, and SaaS platforms. With over ${EXPERIENCE_YEARS} years of experience, I build cutting-edge, AI-enhanced digital solutions that streamline business operations and enhance user experiences.`
const styles = {
    identifier: {
        height: '150px',
        backgroundColor: 'var(--light-main)',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        minHeigth: '80vh',
        backgroundColor: 'var(--light-main)',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column2: {
        width: '40%'
    }
}

const HomeScreen = ({viewport}) => {

    const [isPortrait, setIsPortrait] = useState(viewport.format === 'portrait' ? true : false)

    useEffect(()=>{
        setIsPortrait(viewport.format === 'portrait' ? true : false)
    },[viewport])

    return(
        <>
        <div style={styles.identifier} id="about-me">
        </div>
        <div style={styles.container}>
            {
                isPortrait &&
                <div style={{...styles.column, width: '100%', paddingBottom: '20%', paddingTop: '20%', gap: '50px'}}>
                    <Title/>
                    <BodyText text={bodyText}/>
                    <CTAButton styleToUse={viewport.format} hrefValue={'#contact'}/>
                </div>
            }
            {
                !isPortrait &&
                <>
                    <div style={styles.column}>
                        <Title/>
                        <BodyText text={bodyText}/>
                        <CTAButton styleToUse={viewport.format} hrefValue={'#contact'}/>
                    </div>
                    <div style={{...styles.column, ...styles.column2}}>
                        <BodyImage viewportSize={viewport}/>
                    </div>
                </>
            }
        </div>
        </>
    )
}
export default HomeScreen