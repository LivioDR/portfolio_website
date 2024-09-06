import React from "react";
import { Merriweather } from "next/font/google";

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

const landscapeStyles = {
    width: '25%',
    margin: '5% 25% 5% 50%',
    height: '3em',
    borderRadius: '50px',
    backgroundColor: 'var(--main-color)',
    color: 'var(--white)',
    fontSize: '1em',
}

const portraitStyles = {
    ...landscapeStyles,
    margin: '10% auto 0% auto',
    width: '50%',
}

const formStyles = {
    ...landscapeStyles,
    width: '50%',
    margin: '10px auto 0% auto',
}

const anchorStyle = {
    color: 'var(--white)'
}

const CTAButton = ({text = "Let's talk", functionToCall, hrefValue, styleToUse}) => {

    return(
            <>
            {
                styleToUse == 'landscape' && 
                <button className={merry.className} style={landscapeStyles} onClick={functionToCall}>
                    <a style={anchorStyle} href={hrefValue}>{text}</a>
                </button>
            }
            {
                styleToUse == 'portrait' && 
                <button className={merry.className} style={portraitStyles} onClick={functionToCall}>
                    <a style={anchorStyle} href={hrefValue}>{text}</a>
                </button>
            }
            {
                styleToUse == 'form' && 
                <button className={merry.className} style={formStyles} onClick={functionToCall}>
                    <a style={anchorStyle} href={hrefValue}>{text}</a>
                </button>
            }
            </>
    )
}
export default CTAButton