import { links } from "./data";

export type SectionName = (typeof links)[number]['name']
export type ContactFormEmailProps = {
    message: string,
    senderEmail: string
}