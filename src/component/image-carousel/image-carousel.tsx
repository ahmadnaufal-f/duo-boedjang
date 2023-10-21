import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, FreeMode } from "swiper/modules"
import "swiper/css/bundle"
import styles from "./image-carousel.module.css"
import { useState, useEffect } from "react"
import type { Swiper as SwiperType } from "swiper"
import Image from "next/image"

interface Picture {
    path: string
    width: number
    height: number
    hasTransparency: boolean
    alt: string
}

interface Props {
    pictures: Picture[]
}

const ImageCarousel: React.FC<Props> = ({ pictures }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

    return (
        <div className={styles.container}>
            <Swiper
                className={styles.swiperContainer}
                slidesPerView={1}
                loop={true} // Set loop to false
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: `.${styles.nextButton}`,
                    prevEl: `.${styles.prevButton}`,
                }}
                modules={[Navigation, Autoplay, FreeMode]}
                onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
            >
                {pictures.map(({ path, width, height, alt, hasTransparency }, index) => (
                    <SwiperSlide key={index} className={`swiper-slide ${styles.swiperSlide}`}>
                        <Image src={path} alt={alt} width={width} height={height} data-has-transparency={hasTransparency} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`swiper-button-next ${styles.nextButton}`} />
            <div className={`swiper-button-prev ${styles.prevButton}`} />
        </div>
    )
}

export default ImageCarousel
