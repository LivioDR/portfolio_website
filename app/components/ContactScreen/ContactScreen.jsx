'use client'
import React, { useState } from "react";
import Image from "next/image";
import InputField from "./InputField/InputField";
import laptopImage from '../../../public/assets/icons/laptop.png'

const styles = {
    contactWrapper: {
        background: 'var(--light-main)'
    },
    container: {
        margin: '75px 0px',
    },
    title: {
        margin: '200px 0px 75px 0px',
        color: 'var(--main-color)',
        textAlign: 'center',
        fontSize: '2.5em',
    },
    landscapeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    imgHolder: {
        width: '40%',
        margin: 'auto 5%',
        padding: '0% 5% 0% 0%',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--main-color)',
    },
    formHolder: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    portraitFormHolder: {
        display: 'flex',
        flexDirection: 'column',
    }
}

const ContactScreen = ({viewport}) => {

    const [info, setInfo] = useState({})
    const imgSize = viewport.width * 0.35
    const title = "Let's talk!"

    if(viewport.format == 'portrait'){
        return(
            <div style={styles.contactWrapper} id="contact">
                <h1 style={styles.title}>
                {title}
                </h1>
                <div style={{...styles.container, ...styles.portraitFormHolder}}>
                    <InputField type={'name'} setInfo={setInfo}/>
                    <InputField type={'email'} setInfo={setInfo}/>
                    <InputField type={'message'} setInfo={setInfo}/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div style={styles.contactWrapper} id="contact">
                <h1 style={styles.title}>
                {title}
                </h1>
                <div style={{...styles.container, ...styles.landscapeContainer}}>
                    <div style={{...styles.imgHolder, borderRadius: `${imgSize*0.3}px`}}>
                        <Image
                            className="floating"
                            src={laptopImage}
                            width={imgSize}
                            height={imgSize}
                            alt="Laptop image"
                            />
                    </div>
                    <div style={styles.formHolder}>
                        <InputField type={'name'} setInfo={setInfo}/>
                        <InputField type={'email'} setInfo={setInfo}/>
                        <InputField type={'message'} setInfo={setInfo}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactScreen


// <a href="https://www.freepik.com/free-vector/antigravity-technology-with-elements_4082399.htm#fromView=keyword&page=1&position=10&uuid=3d48b832-96d2-43bf-80ad-1be32d095911">Image by freepik</a>