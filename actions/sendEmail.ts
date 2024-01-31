"use server"

import  React from "react";
import { Resend } from "resend";
import ContactForm from "@/email/contactform";
import { validateString, getErrorMsg } from "@/lib/utils";

require('dotenv').config();

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);


export const sendEmail = async (formData: FormData) => {

    // console.log("Operating on Server")
    // console.log(formData.get("sentEmail"))
    // console.log(formData.get("message"))

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message')

    //Server-side validation
    if (!validateString(senderEmail, 100)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 500)) {
        return {
            error: "Invalid msg"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'adameyileten2@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactForm, {
                message: message as string,
                senderEmail: senderEmail as string
            })
            // text: message as string,
            // react: <Contactform message={message} senderEmail={senderEmail}/>
        })
    } catch (error: unknown) {
        // console.log(error)
        return {
            error: getErrorMsg(error),
        }
    }

    return {
        data
    }
}