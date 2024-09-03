'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import Title from "./Title";
import BodyText from "./BodyText";
import CTAButton from "./CTAButton";
import BodyImage from "./BodyImage";

const bodyText = 'Based in London, Ontario, I am further honing my skills in mobile application development through a specialized program. My commitment to staying at the forefront of technological advancements drives my passion for delivering innovative solutions and exceeding expectations in every project I undertake.'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        minHeigth: '80vh',
        backgroundColor: 'var(--light-main)'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        height: '100%',
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
        <div style={styles.container}>
            {
                isPortrait &&
                <div style={{...styles.column, width: '100%'}}>
                        <Title/>
                        <BodyText text={bodyText}/>
                        <CTAButton styleToUse={viewport.format}/>
                    </div>
            }
            {
                !isPortrait &&
                <>
                    <div style={styles.column}>
                        <Title/>
                        <BodyText text={bodyText}/>
                        <CTAButton styleToUse={viewport.format}/>
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