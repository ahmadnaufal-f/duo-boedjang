"use client"

import styles from "./package-add.module.css"
import { Exo, Concert_One } from "next/font/google"
import localFont from "next/font/local"
import { FaCheck } from "react-icons/fa"
import { motion, Transition, AnimatePresence } from "framer-motion"
import Image from "next/image"
import CtaButton from "@/component/cta-button/cta-button"
import PriceTag from "@/component/price-tag/price-tag"

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

const additionalPackages: string[] = ["Dispenser 30L", "Gelas Takar", "Botol Plastik", "Gelas Plastik 14 Oz & 18 Oz", "Bahan Baku 50 Porsi"]

export default function PackageAddPage({ activeIndex, direction }: Props) {
    return (
        <div className={`${styles.packagesPage} virtual-page`} data-index={8}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>
                    Hanya Tambah
                    <span className={styles.titleSpan}>
                        <PriceTag priceAfter="499rb" />
                    </span>
                </h1>
                <h1 className={styles.subtitleText}>Dapatkan Paket Penjualan Es Teh!</h1>
            </div>
            {activeIndex === 8 ? (
                <>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.5 }}
                    >
                        <Image src="/images/packagesplus.webp" alt="paket penjualan teh" width={446} height={678} />
                    </motion.div>
                    <motion.div
                        className={styles.descriptionWrapper}
                        initial={{ opacity: 0, x: 30 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 * direction }}
                        transition={{ ...springTransition, delay: 0.6 }}
                    >
                        <div className={`${milkyHoney.className} ${styles.descriptionTitle}`}>Sudah Termasuk:</div>
                        {additionalPackages.map((text) => (
                            <div className={`${concertOne.className} ${styles.descriptionItem}`} key={text}>
                                <FaCheck className={styles.checkIcon} />
                                {text}
                            </div>
                        ))}
                        <Image src="/images/logo.svg" alt="logo es coklat duo boedjang" className={styles.logoUnderlay} width={210} height={210} />
                    </motion.div>
                    <CtaButton text="Ambil Promonya Sekarang" activeIndex={activeIndex} />
                </>
            ) : null}
        </div>
    )
}
