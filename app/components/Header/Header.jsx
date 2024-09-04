import React from "react";
import NavBar from "./NavBar/NavBar";


const HeaderStyle = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '150px',
        backgroundColor: 'var(--main-color)',
        borderBottom: '2px var(--main-color) solid',
    },
    portraitContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    portraitNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'var(--light-main)',
        overflowX: 'scroll',
    },
    title: {
        color: 'var(--light-main)',
        marginLeft: '40px',
        fontSize: '2em',
    },
    titlePortrait: {
        color: 'var(--light-main)',
        marginLeft: 0,
        fontSize: '2em',
    }
}

const Header = ({format}) => {

    const isPortrait = format === 'portrait' ? true : false

    if(isPortrait){
        return(
            <div style={{...HeaderStyle.container, ...HeaderStyle.portraitContainer}}>
                <h1 style={HeaderStyle.titlePortrait}>
                    Livio Reinoso
                </h1>
                {
                    isPortrait &&
                    <NavBar format={format} />
                }
                {
                    !isPortrait &&
                    <NavBar format={format}/>
                }
            </div>
        )    
    }
    else{
        return(
            <div style={HeaderStyle.container}>
                <h1 style={HeaderStyle.title}>
                    Livio Reinoso
                </h1>
                <NavBar format={format}/>
            </div>
        )
    }
}
export default Header