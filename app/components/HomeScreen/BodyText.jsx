import React from "react";

const styles = {
    container: {
        width: '80%',
        marginInline: '10%',
        marginTop: '3%',
    },
    text: {
        fontSize: '1em',
        textAlign: 'justify',
        lineHeight: '1.5em',
    },
}

const BodyText = ({text}) => {
    return(
        <div style={styles.container}>
            <p style={styles.text}>{text}</p>
        </div>
    )
}
export default BodyText