import React from "react"
import styles from "./gallery-page.module.css"
import ImageCarousel from "@/component/image-carousel/image-carousel"
import { PiInstagramLogoBold } from "react-icons/pi"
import { Concert_One } from "next/font/google"

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

export default function GalleryPage() {
    const pictures = [
        {
            path: "/images/gallery_1.webp",
            width: 1296,
            height: 1728,
            hasTransparency: false,
            alt: "Pembeli Es Cokelat Duo Boedjang",
        },
        {
            path: "/images/gallery_2.webp",
            width: 1140,
            height: 1600,
            hasTransparency: false,
            alt: "Booth Es Cokelat Duo Boedjang",
        },
        {
            path: "/images/gallery_3.webp",
            width: 1080,
            height: 1008,
            hasTransparency: true,
            alt: "Es Cokelat",
        },
        {
            path: "/images/gallery_4.webp",
            width: 1080,
            height: 1080,
            hasTransparency: true,
            alt: "Es Teh",
        },
        {
            path: "/images/gallery_5.webp",
            width: 1080,
            height: 1008,
            hasTransparency: false,
            alt: "Tanpa Pemanis Buatan",
        },
        {
            path: "/images/gallery_6.webp",
            width: 2338,
            height: 1330,
            hasTransparency: false,
            alt: "Tim Manajemen Es Coklat Duo Boedjang",
        },
    ]

    return (
        <div className={`${styles.page} virtual-page`} data-index={1}>
            <div className={styles.galleryWrapper}>
                <div className={styles.galleryText}>
                    <h2>Galeri</h2>
                </div>
                <div className={styles.imageCarousel}>
                    <ImageCarousel pictures={pictures} />
                </div>
                <div className={styles.instagramButton}>
                    <a href="https://www.instagram.com/escoklatduoboedjang/" target="_blank" rel="noreferrer">
                        <PiInstagramLogoBold />
                        <p className={concertOne.className}>Lihat Lebih Banyak Galeri</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
