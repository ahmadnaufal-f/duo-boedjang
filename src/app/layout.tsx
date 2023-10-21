import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Script from "next/script"

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
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K3ZFZY9GB2" />
            {/* Google Tag (gtag.js) */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-K3ZFZY9GB2');
                `,
                }}
            />
            <body className={Adigiana.className}>
                {children}
                <div className="backgroundPattern"></div>
                <div className="backgroundGradient" id="background-gradient"></div>
            </body>
        </html>
    )
}
