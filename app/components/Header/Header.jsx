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
    },
    title: {
        color: 'var(--light-main)',
        marginLeft: '40px',
    }
}

const Header = ({format}) => {

    return(
        <div style={HeaderStyle.container}>
            <h1 style={HeaderStyle.title}>
                Livio Reinoso
            </h1>
            <NavBar format={format}/>
        </div>
    )
}
export default Header