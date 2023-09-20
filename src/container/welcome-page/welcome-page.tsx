"use client"

import styles from "./welcome-page.module.css"
import Decoration from "@/component/decoration/decoration"
import Image from "next/image"
import { motion, Transition } from "framer-motion"
import LottieItems from "@/component/lottie-items/lottie-items"
import { Concert_One, Caveat } from "next/font/google"
import { useEffect, useState } from "react"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"] })

export default function WelcomePage({ activeIndex }: Props) {
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
                setLeft(rect.left + 60)
                setRight(window.innerWidth - (rect.left + rect.width - 60))
                setIsMenuShowing(activeIndex === 2)
            }
        }, 500)
        return () => clearTimeout(timer)
    }, [activeIndex])

    return (
        <>
            {activeIndex <= 2 ? <Decoration activeIndex={activeIndex} /> : null}
            {activeIndex <= 2 ? <LottieItems activeIndex={activeIndex} /> : null}
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
            <div className={`${styles.page} virtual-page`} data-index={1}>
                <div className={styles.aboutUs}>
                    <div className={styles.aboutUsText}>
                        <h2>Tentang</h2>
                        <h2>Es Coklat Duo Boedjang</h2>
                    </div>
                    <div className={`${concertOne.className} ${styles.descriptionWrapper}`}>
                        <p>
                            Es Coklat Duo Boedjang menggunakan bubuk cokelat berkualitas yang diracik langsung oleh chef berpengalaman sehingga
                            memiliki cita rasa yang khas dan otentik.
                        </p>
                        <p>
                            Tidak hanya minuman cokelat, Es Coklat Duo Boedjang juga memiliki produk minuman es teh untuk customer yang menginginkan
                            minuman yang lebih light.
                        </p>
                        <p>
                            Dengan begitu, Es Coklat Duo Boedjang dapat dinikmati oleh berbagai kalangan dan mampu menjangkau pasar yang lebih luas.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles.page} virtual-page`} data-index={2}>
                <div className={styles.aboutUs}>
                    <h2 className={styles.product}>Produk Kami</h2>
                </div>
                {activeIndex === 2 && isMenuShowing ? (
                    <>
                        <motion.div
                            className={styles.firstMenu}
                            style={{ top: `${top - 40}px`, left: `${left}px` }}
                            initial={{ x: 30, y: 30, scale: 0 }}
                            animate={{ x: 0, y: 0, scale: 1 }}
                        >
                            <div className={`${caveat.className} ${styles.special}`}>Special</div>
                            <div className={styles.menu}>Es Coklat</div>
                        </motion.div>
                        <motion.div
                            className={styles.secondMenu}
                            style={{ top: `${top}px`, right: `${right}px` }}
                            initial={{ x: -30, y: 30, scale: 0 }}
                            animate={{ x: 0, y: 0, scale: 1 }}
                        >
                            <div className={`${caveat.className} ${styles.special}`}>Special</div>
                            <div className={styles.menu}>Es Teh</div>
                        </motion.div>
                    </>
                ) : null}
            </div>
        </>
    )
}
