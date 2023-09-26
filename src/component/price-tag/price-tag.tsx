import styles from "./price-tag.module.css"
import { Oswald } from "next/font/google"

type Props = {
    priceBefore?: string
    priceAfter: string
}

const oswald = Oswald({ subsets: ["latin"] })

export default function PriceTag({ priceBefore, priceAfter }: Props) {
    return (
        <div className={styles.priceTag}>
            {priceBefore && <div className={`${oswald.className} ${styles.priceBefore}`}>{priceBefore}</div>}
            <div className={`${oswald.className} ${styles.priceAfter}`}>
                {priceAfter}
                <div className={`${oswald.className} ${styles.priceRp}`}>Rp</div>
            </div>
        </div>
    )
}
