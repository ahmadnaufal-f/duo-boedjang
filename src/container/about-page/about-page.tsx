"use client"

import CtaButton from "@/component/cta-button/cta-button"
import styles from "./about-page.module.css"
import { Concert_One } from "next/font/google"

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

export default function AboutPage() {
    return (
        <div className={`${styles.page} virtual-page`} data-index={1}>
            <div className={styles.aboutUs}>
                <div className={styles.aboutUsText}>
                    <h2>Tentang</h2>
                    <h2>Es Coklat Duo Boedjang</h2>
                </div>
                <div className={`${concertOne.className} ${styles.descriptionWrapper}`}>
                    <p>
                        Es Coklat Duo Boedjang menggunakan bubuk cokelat berkualitas yang diracik langsung oleh chef berpengalaman sehingga memiliki
                        cita rasa yang khas dan otentik.
                    </p>
                    <p>
                        Tidak hanya minuman cokelat, Es Coklat Duo Boedjang juga memiliki produk minuman es teh untuk customer yang menginginkan
                        minuman yang lebih light.
                    </p>
                    <p>Dengan begitu, Es Coklat Duo Boedjang dapat dinikmati oleh berbagai kalangan dan mampu menjangkau pasar yang lebih luas.</p>
                </div>
            </div>
            <CtaButton text="Tanyakan Lebih Lanjut" activeIndex={1} />
        </div>
    )
}
