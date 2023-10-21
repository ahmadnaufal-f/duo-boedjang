"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/bundle"
import styles from "./carousel.module.css"
import { useState, useEffect } from "react"
import type { Swiper as SwiperType } from "swiper"

interface CarouselProps {
    slides: React.ReactNode[]
    activeCol: number
    setActiveCol: (index: number) => void
}

export default function Carousel({ slides, activeCol, setActiveCol }: CarouselProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on("slideChange", () => {
                setActiveCol(swiperInstance.activeIndex)
            })
        }
    }, [setActiveCol, swiperInstance])

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.slideTo(activeCol)
        }
    }, [activeCol, swiperInstance])

    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 4,
                },
            }}
            pagination={{ type: "bullets" }}
            wrapperClass={styles.wrapper}
            onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
            allowTouchMove={false}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={`slide${index}`}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}
