import React from "react";
import BadgeIcons from "./BadgeIcons";

const badgeStyle = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        border: '1px solid black',
        margin: '1%',
        minHeight: '25px',
        backgroundColor: '#f0f0f0'
    },
    badgeContainer: {
        backgroundColor: '#0a0a0a',
        padding: '2px',
        margin: '2px',
        borderRadius: '5px',
        display: 'grid',
        placeItems: 'center',
    },
    text: {
        marginInline: '10px',
        color: '#0a0a0a',
    },
}

const Badges = ({name}) => {
    return(
        <div style={badgeStyle.container}>
            <div style={badgeStyle.badgeContainer}>
                <BadgeIcons name={name} width={'20px'} height={'20px'}/>
            </div>
            <p style={badgeStyle.text}>{name}</p>
        </div>
        
    )
}
export default Badges