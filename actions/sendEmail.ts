'use server'
import React from 'react'
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY)



const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const senderMessage = formData.get('senderMessage')
    console.log("running on server");
    console.log(formData.get('senderEmail'))
    console.log(formData.get('senderMessage'))

    if (!validateString(senderEmail, 30)) {
        return {
            error: 'Invalid email'
        }
    }
    if (!validateString(senderMessage, 1000)) {
        return {
            error: 'Invalid message'
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'mleosirat@gmail.com',
            subject: 'New email from your protfolio site',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: senderMessage as string,
                senderEmail: senderEmail as string
            })
        })
    } catch (error: unknown) {
        return { error: getErrorMessage(error) }
    }
    return { data }

}

export default sendEmail