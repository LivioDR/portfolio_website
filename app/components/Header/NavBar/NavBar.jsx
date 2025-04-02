import React from "react";
import { Link } from 'react-scroll'

const NavBarStyles = {
    container: {
        color: 'var(--light-main)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '35%',
        listStyleType: 'none',
        fontSize: '1.2em',
    },
    landscapeContainer: {

    },
    portraitContainer: {
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

const NavBar = () => {

    return(
        <>
        <ul 
        className="md:flex hidden"
        style={{...NavBarStyles.container}}>
            <li><Link to="about-me" smooth={true} duration={500}>About Me</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <ul
        className="flex md:hidden"
        style={{...NavBarStyles.container, ...NavBarStyles.portraitContainer}}>
            <li style={NavBarStyles.portraitItems}><Link className="dark-font" to="about-me" smooth={true} duration={500}>About Me</Link></li>
            <li style={NavBarStyles.portraitItems}><Link className="dark-font" to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li style={NavBarStyles.portraitItems}><Link className="dark-font" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        </>
    )
}

export default NavBar