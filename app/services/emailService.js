const sendEmail = async(info) => {
    try{
        const response = await fetch('/api/mail',{
            method: 'POST',
            body: JSON.stringify({
               ...info
            })
          }).then(res => res.json())
        return [true, response.message]
    }
    catch(e){
        return [false, e]
    }
}

const validateFields = (info) => {
    const email = info.email.trim()
    const name = info.name.trim()
    const message = info.message.trim()

    if(!email || !name || !message){
        return [false, "Please complete all fields"]
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!emailRegex.test(email)){
        return [false, "Please enter a valid email"]
    }

    return [true,'']
}

export { validateFields, sendEmail }