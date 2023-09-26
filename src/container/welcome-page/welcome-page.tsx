"use client"

import styles from "./welcome-page.module.css"
import Image from "next/image"
import { motion, Transition } from "framer-motion"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
    direction: number
}

export default function WelcomePage({ activeIndex, direction }: Props) {
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
                            <Image src={"/images/logo.webp"} alt={"Logo Es Coklat Duo Boedjang"} width={121} height={150} className={styles.logo} />
                        </div>
                    </motion.div>
                ) : null}
            </div>
        </>
    )
}
