"use client"

import styles from "./package.module.css"
import { Exo, Concert_One } from "next/font/google"
import localFont from "next/font/local"
import { packages, headers, Header, items, Items } from "./items"
import { FaCheck } from "react-icons/fa"
import { motion, Transition } from "framer-motion"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
    direction: number
}

const exo = Exo({ weight: ["400", "800"], subsets: ["latin"] })
const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })
const milkyHoney = localFont({ src: "../../../public/fonts/MilkyHoney.ttf" })

export default function PackageDetailPage({ activeIndex, direction }: Props) {
    return (
        <div className={`${styles.packagesPage} virtual-page`} data-index={7}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Perbandingan Paket Franchise</h1>
            </div>
            {activeIndex === 7 ? (
                <motion.div
                    className={`${concertOne.className} ${styles.table}`}
                    initial={{ opacity: 0, x: 30 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 * direction }}
                    transition={{ ...springTransition, delay: 0.5 }}
                >
                    {headers.map(({ title }: Header, index: number) => (
                        <div
                            key={`package_detail_page${index}`}
                            className={`${styles.tableHeaderItem} ${index === 0 ? styles.tableHeaderItemFirst : ""} ${milkyHoney.className}`}
                        >
                            {title}
                        </div>
                    ))}
                    {items.map(({ id, text }: Items, index: number) => (
                        <>
                            <div
                                className={`${styles.tableRowItem} ${index === 0 ? styles.tableRowFirst : ""} ${
                                    index === items.length - 1 ? styles.tableRowLast : ""
                                } ${index === 6 ? styles.tableRowSeparate : ""} ${index % 2 === 1 ? styles.tableRowEven : ""}`}
                            >
                                {text}
                            </div>
                            <div
                                className={`${styles.tableRowItem} ${styles.tableColumnOne} ${index === 0 ? styles.tableRowFirst : ""} ${
                                    index === items.length - 1 ? styles.tableRowLast : ""
                                } ${index === 6 ? styles.tableRowSeparate : ""} ${index % 2 === 1 ? styles.tableRowEven : ""}`}
                                style={{ textAlign: "center" }}
                            >
                                {typeof packages[0][id] === "boolean" ? packages[0][id] ? <FaCheck /> : null : packages[0][id]}
                            </div>
                            <div
                                className={`${styles.tableRowItem} ${styles.tableColumnTwo} ${index === 0 ? styles.tableRowFirst : ""} ${
                                    index === items.length - 1 ? styles.tableRowLast : ""
                                } ${index === 6 ? styles.tableRowSeparate : ""} ${index % 2 === 1 ? styles.tableRowEven : ""}`}
                                style={{ textAlign: "center" }}
                            >
                                {typeof packages[1][id] === "boolean" ? packages[1][id] ? <FaCheck /> : null : packages[1][id]}
                            </div>
                        </>
                    ))}
                    {headers.map(({ priceAfter }: Header, index: number) => (
                        <div
                            key={`header_${index}`}
                            className={`${styles.tableFooterItem} ${index === 0 ? styles.tableFooterItemFirst : ""} ${exo.className}`}
                        >
                            {priceAfter}
                        </div>
                    ))}
                </motion.div>
            ) : null}
        </div>
    )
}
