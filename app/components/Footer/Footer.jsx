import React from "react";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    disclaimer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    anchors: {
        textAlign: 'center',
        fontSize: '0.8em',
        margin: '10px 0 20px 0',
        color: 'rgba(200, 200, 200, 0.7)',
    },
    text: {
        textAlign: 'center',
        margin: '20px auto 10px auto',
        color: 'var(--light-main)',

    }
}

const Footer = () => {
    return(
        <div style={styles.container}>
            <p style={styles.text}>
                &copy; 2024 Livio Reinoso. All rights reserved.
            </p>
            <div style={styles.disclaimer}>
                <a
                style={styles.anchors}
                href="https://www.freepik.com/free-vector/antigravity-technology-with-elements_4082399.htm#fromView=keyword&page=1&position=10&uuid=3d48b832-96d2-43bf-80ad-1be32d095911">Laptop image by freepik</a>
                <a
                style={styles.anchors}
                href="https://svgl.app/">Badge icons by svgl</a>
            </div>
        </div>
    )
}
export default Footer