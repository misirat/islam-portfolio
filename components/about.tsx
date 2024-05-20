'use client'
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

const About = () => {
    const { ref } = useSectionInView('About', 0.95)
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
        scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about" >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">In the big world of computers, I'm almost done with my Master's degree in Computer Science. I love making websites look awesome, and playing with CSS and JavaScript; of course React is my favorite tool.</p>

            <p>I spend a lot of time learning from Kevin Powell's videos and taking on design challenges from frontendmentor.io. When React said Next.js is cool, I jumped on board to learn it too.</p>

            <p>Outside of coding, I'm a huge fan of football, tennis, and badminton. I also enjoy taking pictures of stars and nightscapes, and I like playing video games.</p>

        </motion.section>
    )
}

export default About