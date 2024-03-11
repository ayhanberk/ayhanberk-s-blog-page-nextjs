import Image from "next/image"
import styles from "./footer.module.css"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Link href={"/"} className={styles.logo}>
                <div className={styles.imgContainer}><Image src={"/Logo.png"} alt="web logo" fill
                    sizes="100%"
                /></div>
            </Link>
            <div className={styles.text}>
                Ayhan Berk. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
