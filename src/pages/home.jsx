import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};


const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
    },
};

export default function Home() {
    return (
        <motion.div variants={container}
            initial="hidden"
            animate="show" className="h-full flex flex-col items-center justify-center gap-30 text-white lg:flex-row lg:gap-10">
            <motion.div variants={container}
            initial="hidden"
            animate="show"
            className="w-3/4 md:w-1/2 text-center space-y-10 md:space-y-6 lg:text-left lg:pr-30 xl:pr-50">
                <motion.h1 variants={item} className="font-condensed text-xl" >SO, YOU WANT TO TRAVEL TO</motion.h1>
                <motion.h1 variants={item} className="font-bellefair text-8xl md:text-9xl">SPACE</motion.h1>
                <motion.p variants={item} className="font-barlow">Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</motion.p>
            </motion.div>
            <motion.div variants={item} className="bg-white text-gray-800 text-2xl rounded-full w-40 h-40 flex items-center justify-center md:w-60 md:h-60 md:text-3xl lg:w-70 lg:h-70 lg:text-4xl hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300 md:hover:shadow-[0_0_0_70px_rgba(255,255,255,0.1)]">
                <Link to="/destination">EXPLORE</Link>
            </motion.div>
        </motion.div>
    )
}