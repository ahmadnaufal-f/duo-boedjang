import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import styles from "./cta-button.module.css"
import { motion } from "framer-motion"
import { Concert_One } from "next/font/google"

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

type Props = {
    text: string
    activeIndex: number
}

export default function CtaButton({ text, activeIndex }: Props) {
    return (
        <motion.div
            layout
            className={`${styles.buttonContainer} ${concertOne.className}`}
            data-active-index={activeIndex}
            transition={{ delay: -0.1 }}
        >
            <div className={styles.buttonWrapper}>
                <Link href="https://wa.me/6287864648977" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    {text}
                </Link>
            </div>
        </motion.div>
    )
}
