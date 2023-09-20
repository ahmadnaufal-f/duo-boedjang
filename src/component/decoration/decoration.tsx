import { motion, Transition } from "framer-motion"
import Image from "next/image"
import styles from "./decoration.module.css"
import localFont from "next/font/local"
import CtaButton from "../cta-button/cta-button"

const milkyHoney = localFont({ src: "../../../public/fonts/MilkyHoney.ttf" })

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

export default function Decoration({ activeIndex }: Props) {
    return (
        <>
            <motion.div
                className={styles.chocolateSplash}
                initial={{ opacity: 0, y: -75 }}
                animate={activeIndex === 2 ? { opacity: 1, y: -25 } : {}}
                exit={{ opacity: 0, y: -75 }}
                transition={springTransition}
            >
                <Image src="/images/chocolate.svg" alt="Chocolate Splash" width={750} height={500} />
            </motion.div>

            <motion.div
                className={styles.bottomTextContainer}
                data-active-index={activeIndex}
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 75 }}
            >
                <CtaButton text={activeIndex === 2 ? "Tanyakan Lebih Lanjut" : "Ambil Promonya Sekarang!"} activeIndex={activeIndex} />
                <motion.p layout className={`${styles.bottomText} ${milkyHoney.className}`}>
                    Enaknya Terngiang-ngiang
                </motion.p>
                <motion.p layout className={`${styles.bottomText} ${milkyHoney.className}`}>
                    Cuannya Bikin Riang
                </motion.p>
            </motion.div>
            <motion.div
                className={`${styles.chocolateSplash} ${styles.chocolateSplashBottom}`}
                initial={{ opacity: 0, y: 75, scale: 1.1 }}
                animate={activeIndex === 1 ? { opacity: 1, y: 15, scale: 1.2 } : activeIndex <= 3 ? { opacity: 1, y: 25, scale: 1.1 } : {}}
                exit={{ opacity: 0, y: 75, scale: 1.1 }}
                transition={springTransition}
            >
                <Image src="/images/splash-bottom.webp" alt="Chocolate Drink Splash" width={412} height={163} />
            </motion.div>
        </>
    )
}
