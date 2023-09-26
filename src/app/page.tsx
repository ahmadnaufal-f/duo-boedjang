"use client"

import styles from "./page.module.css"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Decoration from "@/component/decoration/decoration"
import LottieItems from "@/component/lottie-items/lottie-items"
import WelcomePage from "@/container/welcome-page/welcome-page"
import AboutPage from "@/container/about-page/about-page"
import ProductPage from "@/container/product-page/product-page"
import AdvantagePage from "@/container/advantage-page/advantage-page"
import PackagesPage from "@/container/packages-page/packages-page"
import PackageDetailPage from "@/container/package-detail-page/package-detail-page"
import PackageAddPage from "@/container/package-add/package-add"
import ROIPage from "@/container/roi-page/roi-page"
import QnAPage from "@/container/qna-page/qna-page"
import ClosingPage from "@/container/closing-page/closing-page"
import PackagesDescPage from "@/container/package-desc-page/package-desc-page"

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

const jsonData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Es Coklat Duo Boedjang",
    url: "https://escoklatduoboedjang.com",
    logo: "https://escoklatduoboedjang.com/images/logo.jpg",
    description: "Enaknya Terngiang-ngiang, Cuannya Bikin Riang",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Harvest City Cluster Quince Blossom Blok QB 4, Setu",
        addressLocality: "Bekasi",
        addressRegion: "West Java",
        postalCode: "17320",
        addressCountry: "Indonenesia",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6282330447440",
        contactType: "marketing",
    },
    sameAs: ["https://www.instagram.com/escoklatduoboedjang/"],
    makesOffer: [
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Product",
                name: "Paket Boedjang Super",
                description: "Paket franchise minuman coklat dan teh.",
                image: "https://escoklatduoboedjang.com/packages.webp",
                brand: "Es Coklat Duo Boedjang",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "IDR",
                    price: "2999999",
                },
            },
        },
        {
            "@type": "Offer",
            itemOffered: {
                "@type": "Product",
                name: "Paket Boedjang Premium",
                description: "Paket franchise minuman coklat dan teh.",
                image: "https://escoklatduoboedjang.com/packages.webp",
                brand: "Es Coklat Duo Boedjang",
                offers: {
                    "@type": "Offer",
                    priceCurrency: "IDR",
                    price: "7499999",
                },
            },
        },
    ],
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
        { name: "welcome page", children: <WelcomePage activeIndex={page} direction={direction} /> },
        { name: "about page", children: <AboutPage /> },
        { name: "product page", children: <ProductPage activeIndex={page} /> },
        { name: "advantage page", children: <AdvantagePage activeIndex={page} direction={direction} /> },
        { name: "packages page", children: <PackagesPage activeIndex={page} direction={direction} /> },
        { name: "paket boedjang super page", children: <PackagesDescPage activeIndex={page} direction={direction} type={"super"} index={5} /> },
        { name: "paket boedjang premium page", children: <PackagesDescPage activeIndex={page} direction={direction} type={"premium"} index={6} /> },
        { name: "package detail page", children: <PackageDetailPage activeIndex={page} direction={direction} /> },
        { name: "package add page", children: <PackageAddPage activeIndex={page} direction={direction} /> },
        { name: "return of investment page", children: <ROIPage activeIndex={page} direction={direction} /> },
        { name: "qna page", children: <QnAPage activeIndex={page} direction={direction} /> },
        { name: "closing page", children: <ClosingPage activeIndex={page} /> },
    ]

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection > pages.length - 1) return
        setPage([page + newDirection, newDirection])
    }

    return (
        <main className={styles.main} id={"page-container"} data-active-index={page} data-direction={direction}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }} />

            <AnimatePresence initial={false} custom={direction}>
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
                {page <= 2 ? <Decoration activeIndex={page} direction={direction} key={"decoration"} /> : null}
                {page <= 2 ? <LottieItems activeIndex={page} key={"lottie"} /> : null}
            </AnimatePresence>
        </main>
    )
}
