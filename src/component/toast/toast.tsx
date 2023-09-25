"use client"

import { Transition, motion } from "framer-motion"
import styles from "./toast.module.css"
import { useEffect, useState } from "react"
import { Dosis } from "next/font/google"

const dosis = Dosis({ subsets: ["latin"] })

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

export default function Toast({ text, direction }: { text: string; direction: number }) {
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        if (text && direction === 0) {
            setTimeout(() => setShowToast(true), 100)
            setTimeout(() => setShowToast(false), 2000)
        }
    }, [text, direction])

    return (
        <motion.div
            className={styles.toastWrapper}
            initial={{ opacity: 0, y: 75, scale: 0.8 }}
            animate={showToast ? { opacity: 1, y: 0, scale: 1 } : {}}
            exit={{ opacity: 0, y: 75, scale: 0.8 }}
            transition={{ ...springTransition }}
        >
            <div className={styles.toast}>
                <p className={dosis.className}>{text}</p>
            </div>
        </motion.div>
    )
}
