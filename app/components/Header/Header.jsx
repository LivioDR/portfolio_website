import React from "react";
import NavBar from "./NavBar/NavBar";
import BadgeIcons from "../ProjectsScreen/Badges/BadgeIcons";


const HeaderStyle = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        background: 'var(--dark-gradient)',
        borderBottom: '2px var(--main-color) solid',
        position: 'fixed',
        zIndex: 1,
    },
    portraitContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '150px',
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

    return(
        <>
        <div
        className="md:hidden flex"
        style={{...HeaderStyle.container, ...HeaderStyle.portraitContainer}}
        >
            <div style={HeaderStyle.titleWrapper}>
            <h1 style={HeaderStyle.titlePortrait}>
                Livio Reinoso
            </h1>
            <a href="https://www.linkedin.com/in/liviodr/" target="_blank"><BadgeIcons name={'LinkedIn'}/></a>
            <a href="https://github.com/LivioDR/" target="_blank"><BadgeIcons name={'GitHubTitle'}/></a>
            </div>
            <NavBar/>
        </div>
        <div 
        className="hidden md:flex"
        style={HeaderStyle.container}>
            <div style={HeaderStyle.title} className="flex flex-row min-w-max items-center gap-2">
                <h1 className="min-w-max px-4">Livio Reinoso</h1>
                <a href="https://www.linkedin.com/in/liviodr/" target="_blank"><BadgeIcons name={'LinkedIn'}/></a>
                <a href="https://github.com/LivioDR/" target="_blank"><BadgeIcons name={'GitHubTitle'}/></a>
            </div>
            <NavBar/>
        </div>
        </>
    )
    }
export default Header