'use client'
import React, { useState } from "react";
import Image from "next/image";
import InputField from "./InputField/InputField";
import CTAButton from "../HomeScreen/CTAButton";
import { sendEmail, validateFields } from "@/app/services/emailService";

const styles = {
    contactWrapper: {
        background: 'var(--light-main)'
    },
    container: {
        margin: '75px 0px',
    },
    title: {
        margin: '150px 0px 75px 0px',
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
        margin: '0% 5%',
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
    },
    alertLabel: {
        color: 'var(--important)',
        textShadow: '1px 1px var(--main-color)',
        fontSize: '1.2em',
        margin: '10px',
        textAlign: 'center',
    },
}

const ContactScreen = ({viewport}) => {

    const [info, setInfo] = useState({name: '', email: '', message: ''})
    const [alert, setAlert] = useState('')
    const imgSize = viewport.width * 0.35
    const title = "Let's talk!"

    const onSendClicked = async(event) => {
        event.preventDefault()
        const validation = validateFields(info)
        setAlert(validation[1])
        if(validation[0]){
            // send email and set success message
            const sentEmail = await sendEmail(info)
            setAlert(sentEmail[1])
            setInfo({name: '', email: '', message: ''})
        }
    }

    if(viewport.format == 'portrait'){
        return(
            <div style={styles.contactWrapper} id="contact">
                <h2 style={styles.title}>
                {title}
                </h2>
                <div style={{...styles.container, ...styles.portraitFormHolder}}>
                    <InputField type={'name'} setInfo={setInfo} receivedValue={info.name}/>
                    <InputField type={'email'} setInfo={setInfo} receivedValue={info.email}/>
                    <InputField type={'message'} setInfo={setInfo} receivedValue={info.message}/>
                    <CTAButton text="Send" styleToUse={'form'} functionToCall={onSendClicked}/>
                    <p style={styles.alertLabel}>{alert}</p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div style={styles.contactWrapper} id="contact">
                <h2 style={styles.title}>
                {title}
                </h2>
                <div style={{...styles.container, ...styles.landscapeContainer}}>
                    <div style={{...styles.imgHolder, borderRadius: `${imgSize*0.3}px`}}>
                        <Image
                            className="floating"
                            src={'/assets/icons/laptop.png'}
                            width={imgSize}
                            height={imgSize}
                            alt="Laptop image"
                            />
                    </div>
                    <div style={styles.formHolder}>
                        <InputField type={'name'} setInfo={setInfo} receivedValue={info.name}/>
                        <InputField type={'email'} setInfo={setInfo} receivedValue={info.email}/>
                        <InputField type={'message'} setInfo={setInfo} receivedValue={info.message}/>
                        <CTAButton text="Send" styleToUse={'form'} functionToCall={onSendClicked}/>
                        <p style={styles.alertLabel}>{alert}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactScreen