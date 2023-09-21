"use client"

import styles from "./welcome-page.module.css"
import Decoration from "@/component/decoration/decoration"
import Image from "next/image"
import { motion, Transition } from "framer-motion"
import LottieItems from "@/component/lottie-items/lottie-items"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

export default function WelcomePage({ activeIndex }: Props) {
    return (
        <>
            <div className={`${styles.page} virtual-page`} data-index={0}>
                {activeIndex === 0 ? (
                    <motion.div
                        className={styles.pageWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ ...springTransition, delay: 0.5 }}
                    >
                        <div className={styles.titleText}>
                            <h1>FRANCHISE ES COKLAT</h1>
                            <h1>DUO BOEDJANG</h1>
                            <Image src={"/images/logo.svg"} alt={"Logo Es Coklat Duo Boedjang"} width={150} height={150} />
                        </div>
                    </motion.div>
                ) : null}
            </div>
        </>
    )
}
