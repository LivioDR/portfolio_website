import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextResponse } from 'next/server';

export async function POST(request){
    // get the data from the body as a readableStream
    const data = request.body
    // convert the readableStream into a string
    const result = await streamToString(data)
    // then parse the string
    const objectResult = JSON.parse(result)

    // separating the variables from the data to pass to firebase
    const email = objectResult.email
    const name = objectResult.name
    const message = objectResult.message


    const mailerSend = new MailerSend({
      apiKey: process.env.API_KEY,
    });
    
    const sentFrom = new Sender(`contact@${process.env.SENDER_DOMAIN}`, name);
    
    const recipients = [
      new Recipient(process.env.MY_MAIL, "Livio Reinoso")
    ];
    const cc = [
      new Recipient(process.env.MY_OTHER_MAIL, "Livio David Reinoso")
    ];
    
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setCc(cc)
      .setSubject("New message in your portfolio page")
      .setText(`Name: ${name}
Email: ${email}
Message:
${message}`);
    
    try{
        const sentEmail = await mailerSend.email.send(emailParams)
        return NextResponse.json(
            {message: "Message sent! We'll be in touch shortly."},
            {status: 200}
        )
    }
    catch(error){
        return NextResponse.json(
            {message: `An error occurred: ${JSON.stringify(error)}`},
            {status: 401}
        )
    }
}


async function streamToString (stream) {
    const chunks = [];
    for await(const chunk of stream) {
        chunks.push(Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString("utf-8");
}