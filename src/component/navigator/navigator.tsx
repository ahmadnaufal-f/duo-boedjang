"use client"

import { Page } from "@/app/page"
import styles from "./navigator.module.css"
import { Concert_One } from "next/font/google"
import Image from "next/image"

type Props = {
    page: number
    setPage: (page: [number, number]) => void
    pages: Page[]
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

export default function Navigator({ page, setPage, pages }: Props) {
    return (
        <div id="page-navigator" className={`${styles.navigator} ${concertOne.className}`}>
            <div className={styles.navigatorContainer}>
                <div className={styles.navigatorContent}>
                    <Image src={"/images/logo.webp"} alt={"Logo Es Coklat Duo Boedjang"} width={111} height={134} className={styles.logo} />
                    <div className={styles.line} />
                    {pages.map(({ name }, index) => (
                        <div
                            className={`${styles.navigatorItem} ${page === index ? styles.active : ""}`}
                            key={`navigator_${name}`}
                            onClick={() => {
                                setPage([index, index > page ? 1 : -1])
                            }}
                        >
                            {name}
                        </div>
                    ))}
                    <div className={styles.line} />
                </div>
            </div>
        </div>
    )
}
