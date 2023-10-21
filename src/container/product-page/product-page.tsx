"use client"

import styles from "./product-page.module.css"
import { motion, Transition } from "framer-motion"
import { Caveat } from "next/font/google"
import { useEffect, useState } from "react"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

const caveat = Caveat({ subsets: ["latin"] })

export default function ProductPage({ activeIndex }: Props) {
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [isMenuShowing, setIsMenuShowing] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            const lottieContainer = document.getElementById("lottie-container")
            if (lottieContainer) {
                const rect = lottieContainer.getBoundingClientRect()
                setTop(rect.top)
                setLeft(rect.left + 45)
                setRight(window.innerWidth - (rect.left + rect.width - 60))
                setIsMenuShowing(activeIndex === 2)
            }
        }, 500)
        return () => clearTimeout(timer)
    }, [activeIndex])

    return (
        <div className={`${styles.page} virtual-page`} data-index={2}>
            <div className={styles.productText}>
                <h2 className={styles.product}>Produk Kami</h2>
            </div>
            {activeIndex === 2 && isMenuShowing ? (
                <>
                    <motion.div
                        className={styles.firstMenu}
                        style={{ top: `${top - 60}px`, left: `${left}px` }}
                        initial={{ x: 30, y: 30, scale: 0 }}
                        animate={{ x: 0, y: 0, scale: 1 }}
                        transition={{ ...springTransition, delay: 0.15 }}
                    >
                        <div className={`${caveat.className} ${styles.special}`}>Special</div>
                        <div className={styles.menu}>Es Coklat</div>
                    </motion.div>
                    <motion.div
                        className={styles.secondMenu}
                        style={{ top: `${top - 15}px`, right: `${right - 10}px` }}
                        initial={{ x: -30, y: 30, scale: 0 }}
                        animate={{ x: 0, y: 0, scale: 1 }}
                        transition={{ ...springTransition, delay: 0.15 }}
                    >
                        <div className={`${caveat.className} ${styles.special}`}>Special</div>
                        <div className={styles.menu}>Es Teh</div>
                    </motion.div>
                </>
            ) : null}
        </div>
    )
}
