import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
    const session = await auth();

    return (
        <nav className={styles.container}>
            <Link href={"/"} className={styles.logo}>
                <div className={styles.imgContainer}>
                    <Image
                        src={"/Logo.png"}
                        alt="web-nav-logo"
                        className={styles.img}
                        sizes="100%"
                        priority
                        fill
                    />
                </div>
            </Link>
            <div>
                <Links session={session} />
            </div>
        </nav>
    )
}

export default Navbar
