'use client'
import React, { useState } from "react";
import { Element } from 'react-scroll'
import Image from "next/image";
import InputField from "./InputField/InputField";
import CTAButton from "../HomeScreen/CTAButton";
import { sendEmail, validateFields } from "@/app/services/emailService";
import { CTAStyles } from "@/lib/constants";
import { Spacer } from "../Common/Spacer";
import { toast } from "react-toastify";

const ContactScreen = () => {

    const [info, setInfo] = useState({name: '', email: '', message: ''})
    const title = "Let's talk!"
    const imgSize = 700

    const onSendClicked = async(event) => {
        event.preventDefault()
        const validation = validateFields(info)
        if(validation[0]){
            // send email and set success message
            const sentEmail = await sendEmail(info)
            if(sentEmail[0]){
                toast.success(sentEmail[1])
            }
            else {
                toast.error(sentEmail[1])
            }
            setInfo({name: '', email: '', message: ''})
        }
        else {
            toast.error(validation[1])
        }
    }

    return(
        <Element 
        className="relative bg-light" 
        name="contact">
            <Spacer flipped darkens/>
            <Spacer darkens/>
            <h2 className="mx-0 mt-[150px] mb-[75px] dark-font text-4xl text-center">
            {title}
            </h2>
            <div className="my-[75px] mx-0 flex flex-row justify-around w-full">
                <div className="hidden md:grid w-2/5 my-0 mx-auto pr-[5%] place-items-center bg-main rounded-3xl">
                    <Image
                        className="floating"
                        src={'/assets/icons/laptop.png'}
                        width={imgSize}
                        height={imgSize}
                        alt="Laptop image"
                        />
                </div>
                <div className="my-0 md:mb-[75px] mx-0 flex flex-col w-full md:w-1/2 md:justify-start justify-center md:items-center">
                    <InputField type={'name'} setInfo={setInfo} receivedValue={info.name}/>
                    <InputField type={'email'} setInfo={setInfo} receivedValue={info.email}/>
                    <InputField type={'message'} setInfo={setInfo} receivedValue={info.message}/>
                    <CTAButton text="Send" styleToUse={CTAStyles.FORM} functionToCall={onSendClicked}/>
                </div>
            </div>
        </Element>
    )
}
export default ContactScreen