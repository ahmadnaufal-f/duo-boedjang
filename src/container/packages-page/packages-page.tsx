"use client"

import styles from "./packages-page.module.css"
import { motion, Transition, AnimatePresence } from "framer-motion"
import { Exo } from "next/font/google"
import localFont from "next/font/local"
import Image from "next/image"
import { BiSolidChevronsUp } from "react-icons/bi"

const milkyHoney = localFont({ src: "../../../public/fonts/MilkyHoney.ttf" })

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
    direction: number
}

type Package = {
    title: string
    priceBefore: string
    priceAfter: string
}

const packages: Package[] = [
    {
        title: "Paket Boedjang Super",
        priceBefore: "Rp 7.000.000",
        priceAfter: "Rp 2.999.999",
    },
    {
        title: "Paket Boedjang Premium",
        priceBefore: "Rp 16.400.000",
        priceAfter: "Rp 7.499.999",
    },
]

const exo = Exo({ weight: ["400", "800"], subsets: ["latin"] })
export default function PackagesPage({ activeIndex, direction }: Props) {
    return (
        <div className={`${styles.packagesPage} virtual-page`} data-index={4}>
            <motion.div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Pilihan Paket Franchise</h1>
            </motion.div>
            <div className={`${milkyHoney.className} ${styles.packagesContainer}`}>
                <AnimatePresence>
                    {activeIndex === 4
                        ? packages.map((packageItem, index) => (
                              <motion.div
                                  className={styles.package}
                                  key={packageItem.title}
                                  initial={{ opacity: 0, x: 30 * direction }}
                                  animate={{ opacity: 1, x: 0, transition: { ...springTransition, delay: 0.5 + index * 0.1, duration: 0.3 } }}
                                  exit={{ opacity: 0, x: -30 * direction, transition: { duration: 0.1 } }}
                              >
                                  <h2 className={styles.packageTitle}>{packageItem.title}</h2>
                                  <div className={`${exo.className} ${styles.packagePriceBefore}`}>{packageItem.priceBefore}</div>
                                  <div className={`${exo.className} ${styles.packagePriceAfter}`}>{packageItem.priceAfter}</div>
                                  <Image src="/images/logo.svg" alt="Package" className={styles.logoUnderlay} width={210} height={210} />
                              </motion.div>
                          ))
                        : null}
                </AnimatePresence>
            </div>
            <motion.div
                className={styles.objectsWrapper}
                initial={{ opacity: 0, x: 30 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 * direction }}
                transition={{ ...springTransition, delay: 0.7 }}
            >
                <Image src="/images/packages.webp" alt="paket lengkap franchise es coklat duo boedjang" width={957} height={826} />
            </motion.div>
            <motion.div
                className={`${milkyHoney.className} ${styles.bottomText}`}
                initial={{ opacity: 0, x: 30 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 * direction }}
                transition={{ ...springTransition, delay: 0.8 }}
            >
                <BiSolidChevronsUp />
                Geser ke atas untuk info lebih lanjut
                <BiSolidChevronsUp />
            </motion.div>
        </div>
    )
}
