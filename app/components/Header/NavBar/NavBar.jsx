import React from "react";
const NavBarStyles = {
    container: {
        color: 'var(--light-main)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '35%',
        listStyleType: 'none',
        fontSize: '1.2em',
    },
    landscapeContainer: {

    },
    portraitContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        backgroundColor: 'var(--light-main)',
        overflowX: 'scroll',
    },
    portraitItems: {
        textAlign: 'center',
        width: '33%',
        marginInline: '5%',
        color: 'var(--main-color)',
    },
}

const NavBar = ({format}) => {

    if(format == 'landscape'){
        return(
            <ul style={{...NavBarStyles.container, ...NavBarStyles.landscapeContainer}}>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        )
    }
    else{
        return(
            <ul style={{...NavBarStyles.container, ...NavBarStyles.portraitContainer}}>
                <li style={NavBarStyles.portraitItems}><a className="dark-font" href="#about-me">About Me</a></li>
                <li style={NavBarStyles.portraitItems}><a className="dark-font" href="#projects">Projects</a></li>
                <li style={NavBarStyles.portraitItems}><a className="dark-font" href="#contact">Contact</a></li>
            </ul>
        )
    }
}
export default NavBar