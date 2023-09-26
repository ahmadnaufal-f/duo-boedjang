"use client"

import styles from "./qna-page.module.css"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { Concert_One, Dosis } from "next/font/google"
import CtaButton from "@/component/cta-button/cta-button"
import { qnaList } from "./qna"

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

type Props = {
    activeIndex: number
    direction: number
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })
const dosis = Dosis({ subsets: ["latin"] })

export default function QnAPage({ activeIndex, direction }: Props) {
    return (
        <div className={`${styles.qnaPage} virtual-page`} data-index={10}>
            <motion.div className={styles.titleWrapper}>
                <h1 className={styles.titleText}>Anda Bertanya,</h1>
                <h1 className={styles.titleText}>Kami Menjawab!</h1>
            </motion.div>
            <AnimatePresence>
                {activeIndex === 10 ? (
                    <div className={styles.qnaWrapper} key="advantage-wrapper">
                        {qnaList.map(({ question, answer }, index) => (
                            <motion.div
                                key={index}
                                className={styles.qna}
                                initial={{ opacity: 0, y: 30 * direction }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 * direction }}
                                transition={{ ...springTransition, delay: 0.5 + index * 0.1 }}
                            >
                                <div className={styles.qnaText}>
                                    <h3 className={`${dosis.className} ${styles.question}`}>{question}</h3>
                                    <p className={`${concertOne.className} ${styles.answer}`}>{answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : null}
            </AnimatePresence>
            <CtaButton text={"Hubungi Admin"} activeIndex={activeIndex} />
        </div>
    )
}
