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
    margin: '5% auto'
}

const CTAButton = ({text = "Let's talk", functionToCall, styleToUse}) => {

    return(
            <>
            {
                styleToUse == 'landscape' && 
                <button className={merry.className} style={landscapeStyles}>
                    {text}
                </button>
            }
            {
                styleToUse == 'portrait' && 
                <button className={merry.className} style={portraitStyles}>
                    {text}
                </button>
            }
            </>
    )
}
export default CTAButton