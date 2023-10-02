import { Concert_One } from "next/font/google"
import styles from "./popup-dialog.module.css"
import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence, Transition } from "framer-motion"

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    isDesktop: boolean
}

const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
}

const concertOne = Concert_One({ weight: ["400"], subsets: ["latin"] })

export default function PopupDialog({ isOpen, setIsOpen, isDesktop }: Props) {
    const closeDialog = () => {
        setIsOpen(false)
    }

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            closeDialog()
        }
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        onClick={handleOutsideClick}
                        key="dialog-popup"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <AnimatePresence>
                            <motion.div
                                className={`${styles.dialog} ${concertOne.className}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0, transition: { ...springTransition, delay: 0.1 } }}
                                exit={{ opacity: 0, y: 30 }}
                                key="dialog-content"
                            >
                                <div className={styles.dialogContent}>
                                    <div className={styles.dialogTitle}>
                                        <p>Catatan:</p>
                                        <button className={styles.closeButton} onClick={closeDialog}>
                                            <IoClose />
                                        </button>
                                    </div>
                                    <ul>
                                        <li>Asumsi Perbandingan Penjualan 14oz dan 18oz (50:50)</li>
                                        <li>Belum termasuk biaya sewa lokasi dan gaji karyawan</li>
                                        <li>Jumlah hari kerja per bulan: 26 hari</li>
                                        {!isDesktop ? <li>Tekan tombol next di bawah tabel untuk melihat hitungan balik modal</li> : null}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
