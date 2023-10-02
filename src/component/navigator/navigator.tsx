"use client"

import { Page } from "@/app/page"
import styles from "./navigator.module.css"
import { useEffect, useState } from "react"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import { Concert_One } from "next/font/google"

type Props = {
    page: number
    setPage: (page: [number, number]) => void
    pages: Page[]
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

export default function Navigator({ page, setPage, pages }: Props) {
    const [isNavigatorOpen, setIsNavigatorOpen] = useState(false)

    const toggleNavigator = () => {
        setIsNavigatorOpen(!isNavigatorOpen)
    }

    return (
        <div id="page-navigator" className={`${styles.navigator} ${concertOne.className}`} style={{ right: isNavigatorOpen ? "0" : "-250px" }}>
            <div className={styles.navigatorContainer} data-open={isNavigatorOpen}>
                <div className={styles.navigatorContent}>
                    {pages.map(({ name }, index) => (
                        <div
                            className={`${styles.navigatorItem} ${page === index ? styles.active : ""}`}
                            key={index}
                            onClick={() => {
                                setIsNavigatorOpen(false)
                                setPage([index, index > page ? 1 : -1])
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navigatorButtonWrapper} style={{ right: isNavigatorOpen ? "300px" : "0" }}>
                <button
                    className={styles.navigatorButton}
                    onClick={toggleNavigator}
                    aria-label={isNavigatorOpen ? "Close Navigator" : "Open Navigator"}
                >
                    <span className={styles.navigatorButtonIcon}>{!isNavigatorOpen ? <TiArrowLeftThick /> : <TiArrowRightThick />}</span>
                </button>
            </div>
        </div>
    )
}
