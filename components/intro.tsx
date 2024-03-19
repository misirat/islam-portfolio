'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRightShort as BsArrow, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function Intro() {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection("Home")
        }
    }, [inView, setActiveSection])

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 0.5

                        }} >
                        <Image src='/mypicture.png'
                            alt="Islam's Portrait"
                            width={192}
                            height={192}
                            quality={90}
                            priority={true}
                            className="h-24 w-24 object-cover rounded-full border-4 border-gray-400 shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute text-3xl bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </div>
            </div>
            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }} >
                Hi, I'm Islam. Welcome to my portfolio! I'm a <span className="italic font-bold">frontend developer</span> with a passion for{" "}
                <span className="font-bold">CSS</span> and <span className="font-bold">JavaScript</span>.
                I have 2 years of experience working with <span className="font-bold">React</span> and recently,
                I've become a big fan of <span className="font-bold underline">React with Next.js</span>.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3
                }} >
                <Link
                    href='#contact'
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
                    transition" >Contact me!<BsArrow className="opacity-60 group-hover:translate-x-1 group-hover:scale-110 transition" />
                </Link>

                <a
                    href='/resume.pdf' download={true}
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                    focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 border border-black/10
                    hover:text-gray-950 transition">Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a href='https://www.linkedin.com/in/mohaiminul-sirat/' target="_blank"
                    className="bg-white text-gray-700 border border-black/10 p-4 flex items-center gap-2
                     rounded-full outline-none focus:scale-110 hover:scale-[1.15] hover:bg-gray-100
                      hover:text-gray-950 active:scale-105 transition"><BsLinkedin />
                </a>

                <a href='https://github.com/misirat' target="_blank"
                    className="bg-white text-gray-700 border border-black/10 p-4 flex items-center
                 gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] hover:bg-gray-100
                  hover:text-gray-950 active:scale-105 transition"><BsGithub />
                </a>
            </motion.div>
        </section>
    )
}
