"use client"

import { default as OriginalLottie, LottieRefCurrentProps } from "lottie-react"
import itemAnimation from "../../../public/lottie/items-animation.json"
import { useEffect, useState, useRef } from "react"

type Props = {
    autoplay?: boolean
    loop?: boolean
    activeIndex: number
}

export default function Lottie({ autoplay = true, loop = true, activeIndex }: Props) {
    const lottieRef = useRef<LottieRefCurrentProps>(null)

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setDirection(1)
            lottieRef.current.goToAndStop(0)
        }
    }, [])

    useEffect(() => {
        if (lottieRef.current) {
            const pageContainer = document.getElementById("page-container")
            const prevIndex = parseInt(pageContainer?.getAttribute("data-prev-index") || "0", 10)
            if (prevIndex !== activeIndex) {
                if (activeIndex > prevIndex) {
                    lottieRef.current.setDirection(1)
                } else if (activeIndex < prevIndex) {
                    lottieRef.current.setDirection(-1)
                }

                console.log(prevIndex * 30, activeIndex * 30 + 1)
                lottieRef.current.playSegments([prevIndex * 30, activeIndex * 30 + 1], true)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])
    return <OriginalLottie animationData={itemAnimation} autoplay={autoplay} loop={loop} lottieRef={lottieRef} />
}
