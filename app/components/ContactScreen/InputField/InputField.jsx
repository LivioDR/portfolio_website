import React from "react";
import { Merriweather } from "next/font/google";

const merry = Merriweather({ weight: '400', subsets: ["latin"] });

const styles = {
    input: {
        width: '80%',
        height: '2.5em',
        borderRadius: '10px',
        margin: '2% auto',
        padding: '2%',
        backgroundColor: 'var(--main-color)',
        color: 'var(--light-main)',
        fontSize: '1.5em',
    },
    textarea: {
        height: '10em',
        resize: 'none',
        overflowY: 'scroll',
    }
}

const InputField = ({type, setInfo, receivedValue}) => {
    
    const changeData = () => {
        setInfo(prev => {
            const data = {
                ...prev,
                [type]: document.getElementById(type).value
            }
            return data
        })
    }
    if(type != 'comments' && type != 'message'){
        return(
            <input className={merry.className} id={type} onInput={()=>{changeData()}}
            style={styles.input} 
            type={type} 
            value={receivedValue}
            placeholder={`Enter your ${type}`}>
            </input>
        )
    }
    else{
        return(
            <textarea className={merry.className} id={type} onInput={()=>{changeData()}}
            style={{...styles.input, ...styles.textarea}} 
            type={type} 
            value={receivedValue}
            placeholder={`Enter your ${type}`}>
            </textarea>
        )
    }
}
export default InputField