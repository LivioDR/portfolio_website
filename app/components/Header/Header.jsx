import React from "react";
import NavBar from "./NavBar/NavBar";
import BadgeIcons from "../ProjectsScreen/Badges/BadgeIcons";


const HeaderStyle = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '150px',
        background: 'var(--dark-gradient)',
        borderBottom: '2px var(--main-color) solid',
        position: 'fixed',
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
        fontSize: '2.5em',
    },
    titlePortrait: {
        color: 'var(--light-main)',
        marginLeft: 0,
        fontSize: '1.5em',
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    }
}

const Header = ({format}) => {

    const isPortrait = format === 'portrait' ? true : false

    if(isPortrait){
        return(
            <div style={{...HeaderStyle.container, ...HeaderStyle.portraitContainer}}>
                <div style={HeaderStyle.titleWrapper}>
                <h1 style={HeaderStyle.titlePortrait}>
                    Livio Reinoso
                </h1>
                <a href="https://www.linkedin.com/in/liviodr/" target="_blank"><BadgeIcons name={'LinkedIn'}/></a>
                <a href="https://github.com/LivioDR/" target="_blank"><BadgeIcons name={'GitHubTitle'}/></a>
                </div>
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
                    <div style={{width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <a href="https://www.linkedin.com/in/liviodr/" target="_blank"><BadgeIcons name={'LinkedIn'}/></a>
                        <a href="https://github.com/LivioDR/" target="_blank"><BadgeIcons name={'GitHubTitle'}/></a>
                    </div>
                </h1>
                <NavBar format={format}/>
            </div>
        )
    }
}
export default Header