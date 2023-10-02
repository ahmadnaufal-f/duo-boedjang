"use client"

import styles from "./roi-page.module.css"
import { Exo, Concert_One } from "next/font/google"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { BiSolidCaretLeftCircle, BiSolidCaretRightCircle } from "react-icons/bi"
import { FaInfoCircle } from "react-icons/fa"
import Carousel from "@/component/carousel/carousel"
import CtaButton from "@/component/cta-button/cta-button"
import PopupDialog from "@/component/popup-dialog/popup-dialog"

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

const tableData: string[][] = [
    ["Omzet/hari", "Rp 180.000", "Rp 360.000", "Rp 540.000", "Rp 720.000", "Rp 900.000"],
    ["Profit/hari", "Rp 89.548", "Rp 179.097", "Rp 268.645", "Rp 358.194", "Rp 447.742"],
    ["Profit/bulan", "Rp 2.328.261", "Rp 4.656.521", "Rp 6.984.782", "Rp 9.313.042", "Rp 11.641.303"],
    ["Balik Modal (hari)", "39", "19", "13", "10", "8"],
]

export default function ROIPage({ activeIndex, direction }: Props) {
    const [activeCol, setActiveCol] = useState<number>(0)
    const [top, setTop] = useState<number>(0)
    const [right, setRight] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isDesktop, setIsDesktop] = useState<boolean>(false)
    const scrollerRef = useRef<HTMLDivElement>(null)

    const slides = tableData.map((data, index) => (
        <div className={styles.movingTable} key={index}>
            {data.map((item, index2) =>
                index2 === 0 ? (
                    <div key={`${index} ${index2}`} className={`${styles.tableHeader} ${concertOne.className}`}>
                        {item}
                    </div>
                ) : (
                    <div
                        key={`${index} ${index2}`}
                        className={`${styles.tableRow} ${index === 3 ? styles.tableLastColumn : ""} ${index2 === 5 ? styles.lastRow : ""}`}
                    >
                        {item}
                    </div>
                )
            )}
        </div>
    ))

    useEffect(() => {
        if (scrollerRef.current) {
            const rect = scrollerRef.current.getBoundingClientRect()
            setTop(rect.top - 70)
            setRight(window.innerWidth - (rect.left + rect.width))
        }
    }, [activeCol])

    useEffect(() => {
        setIsDesktop(window.innerWidth > 768)
    }, [])

    return (
        <div className={`${styles.packagesPage} virtual-page`} data-index={9}>
            <PopupDialog isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
            <div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Return of Investment</h1>
            </div>
            {activeIndex === 9 ? (
                <>
                    <motion.div
                        className={`${styles.table} ${exo.className}`}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.5 }}
                    >
                        <div className={`${styles.tableHeader} ${styles.tableHeaderSpan} ${concertOne.className}`}>Perhitungan Per Porsi</div>
                        <div className={`${styles.tableHeader} ${concertOne.className}`}>Item</div>
                        <div className={`${styles.tableHeader} ${concertOne.className}`}>14 Oz</div>
                        <div className={`${styles.tableHeader} ${concertOne.className}`}>18 Oz</div>
                        <div className={`${styles.tableRow} ${styles.tableFirstRow} ${styles.tableColumnOne}`}>Porsi Per Pack</div>
                        <div className={`${styles.tableRow} ${styles.tableFirstRow} ${styles.tableColumnTwo}`}>55</div>
                        <div className={`${styles.tableRow} ${styles.tableFirstRow} ${styles.tableColumnThree}`}>33</div>
                        <div className={`${styles.tableRow} ${styles.tableColumnOne}`}>Bahan Baku</div>
                        <div className={`${styles.tableRow} ${styles.tableColumnTwo}`}>
                            <span>Rp</span>
                            <span>3.018</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableColumnThree}`}>
                            <span>Rp</span>
                            <span>3.018</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableColumnOne}`}>Packaging</div>
                        <div className={`${styles.tableRow} ${styles.tableColumnTwo}`}>
                            <span>Rp</span>
                            <span>475</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableColumnThree}`}>
                            <span>Rp</span>
                            <span>655</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableColumnOne}`}>Total HPP</div>
                        <div className={`${styles.tableRow} ${styles.tableColumnTwo}`}>
                            <span>Rp</span>
                            <span>3.493</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableColumnThree}`}>
                            <span>Rp</span>
                            <span>5.555</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableLastRow} ${styles.tableColumnOne}`}>Harga Jual</div>
                        <div className={`${styles.tableRow} ${styles.tableLastRow} ${styles.tableColumnTwo}`}>
                            <span>Rp</span>
                            <span>8.000</span>
                        </div>
                        <div className={`${styles.tableRow} ${styles.tableLastRow} ${styles.tableColumnThree}`}>
                            <span>Rp</span>
                            <span>10.000</span>
                        </div>
                        <div className={`${styles.tableRowSummary} ${styles.tableRowSpan} ${styles.tableRow}`}>
                            <p>Profit</p>
                        </div>
                        <div className={`${styles.tableRowSummary} ${styles.tableFirstRow} ${styles.tableRow}`}>
                            <span>Rp</span>
                            <span>4.507</span>
                        </div>
                        <div className={`${styles.tableRowSummary} ${styles.tableFirstRow} ${styles.tableRow}`}>
                            <span>Rp</span>
                            <span>4.448</span>
                        </div>
                        <div className={`${styles.tableRowSummary} ${styles.tableLastRow} ${styles.tableRow}`}>56%</div>
                        <div className={`${styles.tableRowSummary} ${styles.tableLastRow} ${styles.tableRow}`}>44%</div>
                    </motion.div>
                    <motion.div
                        className={styles.tableTitle}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.6 }}
                    >
                        <div className={concertOne.className}>Tabel Perhitungan Omzet</div>
                        <FaInfoCircle onClick={() => setIsOpen(true)} />
                    </motion.div>
                    <motion.div
                        className={`${styles.swipeTable} ${exo.className}`}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.6 }}
                    >
                        <div className={styles.fixedTable}>
                            <div className={`${styles.tableHeader} ${concertOne.className}`}>Penjualan/hari</div>
                            <div className={`${styles.tableRow} ${styles.tableFirstColumn}`}>20</div>
                            <div className={`${styles.tableRow} ${styles.tableFirstColumn}`}>40</div>
                            <div className={`${styles.tableRow} ${styles.tableFirstColumn}`}>60</div>
                            <div className={`${styles.tableRow} ${styles.tableFirstColumn}`}>80</div>
                            <div className={`${styles.tableRow} ${styles.tableFirstColumn}`}>100</div>
                        </div>
                        <div className={styles.movingTableContainer}>
                            <div className={styles.movingTableWrapper} ref={scrollerRef}>
                                <Carousel slides={slides} activeCol={activeCol} setActiveCol={setActiveCol} />
                            </div>
                        </div>
                        <AnimatePresence>
                            {activeCol === 3 ? (
                                <motion.div
                                    className={styles.popup}
                                    style={{ top: `${top}px`, right: `${right}px` }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1, transition: { ...springTransition } }}
                                    exit={{ scale: 0 }}
                                    key={"popup"}
                                >
                                    Balik Modal Hitungan Hari!!!
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div
                        className={styles.tableNavigation}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.6 }}
                    >
                        <div className="prevButton" style={activeCol > 0 ? { opacity: 1 } : { opacity: 0.5 }}>
                            <BiSolidCaretLeftCircle
                                onClick={() => {
                                    setActiveCol(activeCol - 1 < 0 ? 0 : activeCol - 1)
                                }}
                            />
                        </div>
                        <div className="nextButton" style={activeCol < 3 ? { opacity: 1 } : { opacity: 0.5 }}>
                            <BiSolidCaretRightCircle
                                onClick={() => {
                                    setActiveCol(activeCol + 1 > 3 ? 3 : activeCol + 1)
                                }}
                            />
                        </div>
                    </motion.div>
                </>
            ) : null}
            <CtaButton text="Ambil Cuannya Sekarang" activeIndex={activeIndex} />
        </div>
    )
}
