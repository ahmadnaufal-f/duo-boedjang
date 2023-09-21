"use client"

import AdvantagePage from "@/container/advantage-page/advantage-page"
import styles from "./page.module.css"
import WelcomePage from "@/container/welcome-page/welcome-page"
import { useState, useEffect, useRef } from "react"
import PackagesPage from "@/container/packages-page/packages-page"

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [prevIndex, setPrevIndex] = useState<number>(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // The virtual page is currently in the viewport
                        const pageIndex = parseInt(entry.target.getAttribute("data-index") || "0", 10)
                        const currIndex = parseInt(containerRef.current?.getAttribute("data-active-index") || "0", 10)
                        if (currIndex !== pageIndex) setPrevIndex(currIndex)
                        setActiveIndex(pageIndex)
                        console.log(currIndex, pageIndex)
                    }
                })
            },
            { threshold: 0.2 } // Trigger when at least 50% of the virtual page is visible
        )

        const virtualPages = document.querySelectorAll(".virtual-page")

        virtualPages.forEach((page, index) => {
            page.setAttribute("data-index", index.toString()) // Add a data attribute to identify the index
            observer.observe(page)
        })

        console.log(observer)

        return () => {
            observer.disconnect() // Cleanup when component unmounts
        }
    }, [])

    return (
        <main className={styles.main} id={"page-container"} ref={containerRef} data-active-index={activeIndex} data-prev-index={prevIndex}>
            <WelcomePage activeIndex={activeIndex} />
            <AdvantagePage activeIndex={activeIndex} />
            <PackagesPage activeIndex={activeIndex} />
        </main>
    )
}
