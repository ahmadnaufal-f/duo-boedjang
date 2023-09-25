"use client"

import styles from "./lottie-items.module.css"
import { lazy, useState, useEffect, Suspense } from "react"
import { motion, Transition } from "framer-motion"

const importLazyLottie = () => import("@/component/lottie/lottie")

const LazyLottie = lazy(importLazyLottie)

function Loading() {
    return <div className="loader" />
}

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

export default function LottieItems({ activeIndex }: Props) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Initiate the loading by calling the wrapped import function
        importLazyLottie()
            .then(() => {
                setIsLoaded(true)
            })
            .catch((error) => {
                console.error("Error loading LazyLottie:", error)
            })
    }, [])
    return (
        <motion.div
            className={styles.lottieWrapper}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            data-active-index={activeIndex}
        >
            <motion.div
                layout
                style={activeIndex === 0 || activeIndex === 2 ? { alignSelf: "center" } : { alignSelf: "end" }}
                transition={springTransition}
                id={"lottie-container"}
            >
                {isLoaded ? (
                    <Suspense fallback={<div className="loader" />}>
                        <LazyLottie autoplay={false} loop={false} activeIndex={activeIndex} />
                    </Suspense>
                ) : (
                    <Loading />
                )}
            </motion.div>
        </motion.div>
    )
}
