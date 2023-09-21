"use client"

import styles from "./package.module.css"
import { Exo, Concert_One } from "next/font/google"
import localFont from "next/font/local"
import { packages, headers, Header, items, Items } from "./items"
import { FaCheck } from "react-icons/fa"
import { motion, Transition, AnimatePresence } from "framer-motion"

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
        <div className={`${styles.packagesPage} virtual-page`} data-index={5}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Perbandingan Paket Franchise</h1>
            </div>
            {activeIndex === 5 ? (
                <motion.div
                    className={`${concertOne.className} ${styles.table}`}
                    initial={{ opacity: 0, x: 30 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 * direction }}
                    transition={{ ...springTransition, delay: 0.5 }}
                >
                    {headers.map(({ title }: Header, index: number) => (
                        <div
                            key={index}
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
                                } ${index === 3 ? styles.tableRowSeparate : ""}`}
                            >
                                {text}
                            </div>
                            <div
                                className={`${styles.tableRowItem} ${styles.tableColumnOne} ${index === 0 ? styles.tableRowFirst : ""} ${
                                    index === items.length - 1 ? styles.tableRowLast : ""
                                } ${index === 3 ? styles.tableRowSeparate : ""}`}
                                style={{ textAlign: "center" }}
                            >
                                {packages[0][id] ? <FaCheck /> : null}
                            </div>
                            <div
                                className={`${styles.tableRowItem} ${styles.tableColumnTwo} ${index === 0 ? styles.tableRowFirst : ""} ${
                                    index === items.length - 1 ? styles.tableRowLast : ""
                                } ${index === 3 ? styles.tableRowSeparate : ""}`}
                                style={{ textAlign: "center" }}
                            >
                                {packages[1][id] ? <FaCheck /> : null}
                            </div>
                        </>
                    ))}
                    {headers.map(({ priceAfter }: Header, index: number) => (
                        <div key={index} className={`${styles.tableFooterItem} ${index === 0 ? styles.tableFooterItemFirst : ""} ${exo.className}`}>
                            {priceAfter}
                        </div>
                    ))}
                </motion.div>
            ) : null}
        </div>
    )
}