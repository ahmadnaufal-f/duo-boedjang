"use client"

import styles from "./page.module.css"
import { useState } from "react"
import Decoration from "@/component/decoration/decoration"
import LottieItems from "@/component/lottie-items/lottie-items"
import WelcomePage from "@/container/welcome-page/welcome-page"
import AboutPage from "@/container/about-page/about-page"
import ProductPage from "@/container/product-page/product-page"
import AdvantagePage from "@/container/advantage-page/advantage-page"
import PackagesPage from "@/container/packages-page/packages-page"
import { motion, AnimatePresence } from "framer-motion"
import PackageDetailPage from "@/container/package-detail-page/package-detail-page"
import PackageAddPage from "@/container/package-add/package-add"

const variants = {
    enter: (direction: number) => {
        return {
            y: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            y: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

type Page = {
    name: string
    children: JSX.Element
}

export default function Home() {
    // const containerRef = useRef<HTMLDivElement | null>(null)
    // const [activeIndex, setActiveIndex] = useState<number>(0)
    // const [prevIndex, setPrevIndex] = useState<number>(0)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     // The virtual page is currently in the viewport
    //                     const pageIndex = parseInt(entry.target.getAttribute("data-index") || "0", 10)
    //                     const currIndex = parseInt(containerRef.current?.getAttribute("data-active-index") || "0", 10)
    //                     if (currIndex !== pageIndex) setPrevIndex(currIndex)
    //                     setActiveIndex(pageIndex)
    //                     console.log(currIndex, pageIndex)
    //                 }
    //             })
    //         },
    //         { threshold: 0.2 } // Trigger when at least 50% of the virtual page is visible
    //     )

    //     const virtualPages = document.querySelectorAll(".virtual-page")

    //     virtualPages.forEach((page, index) => {
    //         page.setAttribute("data-index", index.toString()) // Add a data attribute to identify the index
    //         observer.observe(page)
    //     })

    //     console.log(observer)

    //     return () => {
    //         observer.disconnect() // Cleanup when component unmounts
    //     }
    // }, [])
    const [[page, direction], setPage] = useState([0, 0])

    const pages: Page[] = [
        { name: "welcome page", children: <WelcomePage activeIndex={page} /> },
        { name: "about page", children: <AboutPage /> },
        { name: "product page", children: <ProductPage activeIndex={page} /> },
        { name: "advantage page", children: <AdvantagePage activeIndex={page} direction={direction} /> },
        { name: "packages page", children: <PackagesPage activeIndex={page} direction={direction} /> },
        { name: "package detail page", children: <PackageDetailPage activeIndex={page} direction={direction} /> },
        { name: "package add page", children: <PackageAddPage activeIndex={page} direction={direction} /> },
    ]

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection > pages.length - 1) return
        setPage([page + newDirection, newDirection])
    }

    return (
        <main className={styles.main} id={"page-container"} data-active-index={page} data-direction={direction}>
            <AnimatePresence initial={false} custom={direction}>
                {page <= 2 ? <Decoration activeIndex={page} key={"decoration"} /> : null}
                {page <= 2 ? <LottieItems activeIndex={page} key={"lottie"} /> : null}
                <motion.div
                    key={pages[page].name}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.y, velocity.y)

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    style={{ height: "100vh", width: "100vw", display: "flex", position: "absolute" }}
                >
                    {pages[page].children}
                </motion.div>
            </AnimatePresence>
        </main>
    )
}
