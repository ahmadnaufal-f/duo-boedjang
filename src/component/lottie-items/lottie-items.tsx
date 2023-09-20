"use client"

import styles from "./lottie-items.module.css"
import { lazy, Suspense } from "react"
import { motion, Transition } from "framer-motion"

const LazyLottie = lazy(() => import("@/component/lottie/lottie"))

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

export default function LottieItems({ activeIndex }: Props) {
    return (
        <motion.div
            className={styles.lottieWrapper}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            data-active-index={activeIndex}
        >
            <motion.div
                layout
                style={activeIndex === 0 || activeIndex === 2 ? { alignSelf: "center" } : { alignSelf: "end" }}
                transition={springTransition}
                id={"lottie-container"}
            >
                <Suspense fallback={<div className={styles.loader}></div>}>
                    <LazyLottie autoplay={false} loop={false} activeIndex={activeIndex} />
                </Suspense>
            </motion.div>
        </motion.div>
    )
}
