"use client"

import styles from "./advantage-page.module.css"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { Concert_One, Dosis } from "next/font/google"
import { GiReceiveMoney } from "react-icons/gi"
import { FaFileContract, FaPeopleGroup } from "react-icons/fa6"
import { PiMedalFill } from "react-icons/pi"
import { SiCodechef } from "react-icons/si"
import { MdOutlineScreenShare, MdOutlineOndemandVideo } from "react-icons/md"
import CtaButton from "@/component/cta-button/cta-button"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
    direction: number
}

type Advantage = {
    title: string
    description: string
    icon: React.ReactNode
}

const advantages: Advantage[] = [
    {
        title: "No Royalty Fee dan No Bagi Hasil",
        description: "Kami tidak menerapkan sistem Royalty maupun Bagi Hasil sehingga profit yang anda dapatkan sepenuhnya milik anda.",
        icon: <GiReceiveMoney />,
    },
    {
        title: "Kontrak Seumur Hidup",
        description: "Anda dapat menjadi mitra kami selama yang anda mau dan kami dapat menyuplai seluruh kebutuhan mitra untuk berjualan selamanya.",
        icon: <FaFileContract />,
    },
    {
        title: "Bahan Baku Premium",
        description:
            "Bubuk cokelat yang kami gunakan berkualitas premium sehingga tidak akan menimbulkan serik dan aman dikonsumsi anak-anak maupun lansia.",
        icon: <PiMedalFill />,
    },
    {
        title: "Racikan Chef",
        description:
            "Bubuk Cokelat dan Teh yang kami gunakan diracik langsung oleh chef berpengalaman sehingga memiliki cita rasa hotel bintang lima.",
        icon: <SiCodechef />,
    },
    {
        title: "Free Akun Sosmed dan Konten Marketing",
        description: "Kami akan menyediakan akun sosial media beserta kontennya sehingga anda tidak perlu lagi pusing-pusing membuatnya.",
        icon: <MdOutlineScreenShare />,
    },
    {
        title: "Fast Response dan Supportive Team",
        description: "Tim kami siap 24 jam untuk memberikan bimbingan mulai dari penentuan lokasi, penentuan harga, hingga strategi marketing.",
        icon: <FaPeopleGroup />,
    },
    {
        title: "Free Video Tutorial",
        description: "Kami menyediakan video tutorial pemasangan booth dan pembuatan es cokelat jadi anda tidak akan kebingungan dan siap berjualan!",
        icon: <MdOutlineOndemandVideo />,
    },
]

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })
const dosis = Dosis({ subsets: ["latin"] })

export default function AdvantagePage({ activeIndex, direction }: Props) {
    return (
        <div className={`${styles.advantagePage} virtual-page`} data-index={3}>
            <motion.div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Keunggulan Kami</h1>
            </motion.div>
            {activeIndex === 3 ? (
                <div className={styles.advantageWrapper} key="advantage-wrapper">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={`advantage_${index}`}
                            className={styles.advantage}
                            initial={{ opacity: 0, x: 30 * direction }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 * direction }}
                            transition={{ ...springTransition, delay: 0.5 + index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>{advantage.icon}</div>
                            <div className={styles.advantageText}>
                                <h3 className={`${dosis.className} ${styles.advantageTitle}`}>{advantage.title}</h3>
                                <p className={`${concertOne.className} ${styles.advantageDescription}`}>{advantage.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}
