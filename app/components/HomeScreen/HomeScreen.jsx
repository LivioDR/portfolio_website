import Title from "./Title";
import BodyText from "./BodyText";
import CTAButton from "./CTAButton";
import BodyImage from "./BodyImage";
import { Spacer } from "../Common/Spacer";
import { cn } from "@/lib/utils";

const EXPERIENCE_YEARS = Number(new Date().getFullYear()) - 2020

const bodyTexts = [`I'm a Front-End Developer and AI Software Engineer based in London, Ontario 🇨🇦 specializing in scalable web applications, AI chatbot development, and SaaS platforms. With over ${EXPERIENCE_YEARS} years of experience, I build cutting-edge, AI-enhanced digital solutions that streamline business operations and enhance user experiences.`]

const styles = {
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const HomeScreen = ({viewport}) => {

    return(
        <>
        <div className="min-h-[150px] w-full bg-light" id="about-me">
        </div>
        <div className="relative flex flex-row w-full d min-h-[80vh] bg-light">

            {/* MOBILE DISPLAY */}
            <div 
            className={cn("md:hidden flex")}
            style={{...styles.column, width: '100%', paddingBottom: '20%', paddingTop: '20%', gap: '50px'}}
            >
                <Title/>
                { bodyTexts.map((text, index) => 
                    <BodyText key={index} text={text}/>
                )}
                <CTAButton styleToUse={viewport.format} hrefValue={'#contact'}/>
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
                <CTAButton styleToUse={viewport.format} hrefValue={'#contact'}/>
            </div>
            <div style={{...styles.column}} className="md:flex hidden w-2/5">
                <BodyImage viewportSize={viewport}/>
            </div>
            
            <Spacer flipped={false} darkens={true}/>
        </div>
        </>
    )
}
export default HomeScreen