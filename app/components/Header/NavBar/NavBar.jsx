import React from "react";

const NavBarStyles = {
    container: {
        color: '#D4C2FC',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
        listStyleType: 'none',
    }
}

const NavBar = () => {

    return(
        <ul style={NavBarStyles.container}>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    )
}
export default NavBar