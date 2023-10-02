"use client"

import styles from "./closing-page.module.css"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { Concert_One, Dosis } from "next/font/google"
import Image from "next/image"
import CtaButton from "@/component/cta-button/cta-button"
import { PiInstagramLogoBold, PiWhatsappLogoBold, PiCopyrightBold } from "react-icons/pi"
import Link from "next/link"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })
const dosis = Dosis({ subsets: ["latin"] })

export default function ClosingPage({ activeIndex }: Props) {
    return (
        <div className={`${styles.closingPage} virtual-page`} data-index={11}>
            <AnimatePresence>
                {activeIndex === 11 ? (
                    <div key="closing-wrapper">
                        <motion.div
                            className={styles.logoWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...springTransition, delay: 0.5 }}
                        >
                            <Image src={"/images/logo.webp"} alt={"Logo Es Coklat Duo Boedjang"} width={113} height={140} className={styles.logo} />
                        </motion.div>
                        <motion.div
                            className={styles.closingTextWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...springTransition, delay: 0.6 }}
                        >
                            <div className={styles.closingText}>
                                <h1>TUNGGU APA LAGI?</h1>
                                <h1>MARI BERCUAN RIANG</h1>
                                <h1>BERSAMA</h1>
                                <h1>ES COKLAT DUO BOEDJANG!</h1>
                            </div>
                        </motion.div>
                        <motion.div
                            className={styles.ctaWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...springTransition, delay: 0.7 }}
                        >
                            <CtaButton text={"Hubungi Admin"} activeIndex={activeIndex} />
                        </motion.div>
                        <motion.div
                            className={styles.bankWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...springTransition, delay: 0.8 }}
                        >
                            <div className={`${concertOne.className} ${styles.bank}`}>
                                <p>Nomor Rekening</p>
                                <ul className={styles.bankList}>
                                    <li>
                                        <div>
                                            BCA<span>:</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Mandiri<span>:</span>
                                        </div>
                                    </li>
                                    <p>5020352231</p>
                                    <p>102-00-1160214-8</p>
                                </ul>
                                <p>An. CV Kulinerindo Jaya Sentosa</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={styles.warningWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ ...springTransition, delay: 0.9 }}
                        >
                            <div className={`${concertOne.className}`}>
                                Hati-hati penipuan mengatasnamakan Es Coklat Duo Boedjang maupun CV Kulinerindo Jaya Sentosa!
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className={styles.footer}>
                <p className={`${dosis.className} ${styles.footerText}`}>
                    <span>
                        <PiCopyrightBold />
                        2023 CV Kulinerindo Jaya Sentosa
                    </span>
                </p>
                <p className={`${dosis.className} ${styles.footerText}`}>
                    <Link
                        href={
                            "https://wa.me/6287864648977?text=Halo%20kak%21%20Saya%20tertarik%20dengan%20franchise%20Es%20Coklat%20Duo%20Boedjang%20dan%20ingin%20tanya-tanya%20lebih%20lanjut."
                        }
                        target="_blank"
                    >
                        <PiWhatsappLogoBold />
                        0878-6464-8977
                    </Link>
                    <Link href={"https://www.instagram.com/escoklatduoboedjang"} target="_blank">
                        <PiInstagramLogoBold />
                        @escoklatduoboedjang
                    </Link>
                </p>
                <p className={`${dosis.className} ${styles.footerText}`}>
                    Website created by:{" "}
                    <Link href={"https://ahmadnaufal.site/"} target="_blank">
                        ahmadnaufal
                    </Link>
                </p>
            </div>
        </div>
    )
}
