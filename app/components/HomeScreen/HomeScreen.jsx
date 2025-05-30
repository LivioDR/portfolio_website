'use client'
import { Element } from 'react-scroll'
import Title from "./Title";
import BodyText from "./BodyText";
import CTAButton from "./CTAButton";
import BodyImage from "./BodyImage";
import { Spacer } from "../Common/Spacer";
import { cn } from "@/lib/utils";
import { CTAStyles } from "@/lib/constants";

// const EXPERIENCE_YEARS = Number(new Date().getFullYear()) - 2020

const bodyTexts = [`I'm a Senior Front-End Developer and AI Software Engineer based in London, Ontario 🇨🇦 with a background in building fast, accessible, and scalable digital solutions.`, `I specialize in React, TypeScript, and modern JavaScript frameworks, alongside AI chatbot development and SaaS platforms that streamline business operations and enhance user experiences.`, `Whether crafting intuitive user interfaces from Figma designs, building cutting-edge, accessible, and scalable AI-enhanced digital solutions, or customizing CMS platforms, I bring a user-centered, performance-focused mindset to every project.`]

const styles = {
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const HomeScreen = () => {

    return(
        <>
        <Element className="min-h-[150px] w-full bg-light" name="about-me">
        </Element>
        <div className="relative flex flex-row w-full d min-h-[80vh] bg-light">

            {/* MOBILE DISPLAY */}
            <div 
            className={cn("md:hidden flex")}
            style={{...styles.column, width: '100%', paddingBottom: '20%', paddingTop: '20%', gap: '12px'}}
            >
                <Title/>
                { bodyTexts.map((text, index) => 
                    <BodyText key={index} text={text}/>
                )}
                <CTAButton styleToUse={CTAStyles.PORTRAIT} hrefValue={'#contact'}/>
            </div>

            {/* DESKTOP DISPLAY */}
            <div 
            className={cn("md:flex hidden w-3/5")}
            style={styles.column}
            >
                <Title/>
                { bodyTexts.map((text, index) => 
                    <BodyText key={index} text={text}/>
                )}
                <CTAButton styleToUse={CTAStyles.LANDSCAPE} hrefValue={'#contact'}/>
            </div>
            <div style={{...styles.column}} className="md:flex hidden mx-auto w-2/5 max-w-[500px]">
                <BodyImage/>
            </div>
            
            <Spacer flipped={false} darkens={true}/>
        </div>
        </>
    )
}
export default HomeScreen