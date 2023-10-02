import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

export const metadata: Metadata = {
    title: "Franchise Es Coklat Duo Boedjang",
    description: "Enaknya Terngiang-ngiang, Cuannya Bikin Riang",
    keywords: "franchise, franchise minuman, franchise minuman coklat, franchise es coklat, franchise es teh, bisnis cuan, es coklat du boedjang",
    themeColor: "#FEE790",
}

const Adigiana = localFont({ src: "/../../public/fonts/AdigianaUI.ttf" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={Adigiana.className}>
                {children}
                <div className="backgroundPattern"></div>
                <div className="backgroundGradient" id="background-gradient"></div>
            </body>
        </html>
    )
}
