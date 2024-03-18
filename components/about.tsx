'use client'
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
        scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about" >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam odit quasi?
                Rem, maiores eveniet dolores unde incidunt consectetur velit at officia ipsum ipsam
                amet quis beatae doloribus quia expedita?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Et, quasi eveniet! Pariatur esse voluptatum voluptatibus corporis obcaecati maiores,
                id odio doloribus minima ipsa ullam facilis a assumenda consequuntur voluptatem natus.</p>
        </motion.section>
    )
}

export default About