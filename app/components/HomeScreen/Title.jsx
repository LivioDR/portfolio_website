import React from "react";

const styles = {
    width: '80%',
    fontSize: '3rem',
    textAlign: 'left',
}

const Title = () => {
    return(
        <h2 style={styles}>AI-Powered Front-End Developer <span className="wave hidden md:inline">👋</span></h2>
    )
}
export default Title