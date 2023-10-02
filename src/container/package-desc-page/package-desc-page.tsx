"use client"

import PriceTag from "@/component/price-tag/price-tag"
import styles from "./package-desc.module.css"
import { motion, Transition } from "framer-motion"
import Image from "next/image"
import CtaButton from "@/component/cta-button/cta-button"

type Props = {
    activeIndex: number
    direction: number
    type: string
    index: number
}

type Package = {
    title: string
    priceBefore: string
    priceAfter: string
    imageWidth: number
    imageHeight: number
}

type Packages = {
    [key: string]: Package
}

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

const packages: Packages = {
    super: {
        title: "Paket Boedjang Super",
        priceBefore: "Rp 7.000.000",
        priceAfter: "2,99jt",
        imageWidth: 846,
        imageHeight: 773,
    },
    premium: {
        title: "Paket Boedjang Premium",
        priceBefore: "Rp 16.400.000",
        priceAfter: "7,49jt",
        imageWidth: 941,
        imageHeight: 761,
    },
}

export default function PackagesDescPage({ activeIndex, direction, type, index }: Props) {
    return (
        <div className={`${styles.packagesPage} virtual-page`} data-index={index}>
            <motion.div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>{packages[type].title}</h1>
            </motion.div>
            <motion.div
                className={styles.priceWrapper}
                initial={{ opacity: 0, x: 30 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 * direction }}
                transition={{ ...springTransition, delay: 0.5 }}
            >
                <div className={styles.specialOfferContainer}>
                    <div className={styles.specialOffer}>SPECIAL</div>
                    <div className={styles.specialOffer}>OFFER</div>
                </div>
                <PriceTag priceBefore={packages[type].priceBefore} priceAfter={packages[type].priceAfter} />
            </motion.div>
            <motion.div
                className={styles.imageWrapper}
                initial={{ opacity: 0, x: 30 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 * direction }}
                transition={{ ...springTransition, delay: 0.6 }}
            >
                <Image
                    src={`/images/package-${type}.webp`}
                    alt={`ilustrasi paket boedjang ${type}`}
                    width={packages[type].imageWidth}
                    height={packages[type].imageHeight}
                />
            </motion.div>
            <CtaButton text="Ambil Promonya Sekarang" activeIndex={activeIndex} />
        </div>
    )
}
