'use client'
import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image"
import { handleLogout } from "@/lib/actions/authActions"

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blogs",
        path: "/blog"
    }
]

const Links = ({ session }) => {

    const [open, setOpen] = useState(false)
    //Temporary Data

    // const isAdmin = true;


    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                <div className={styles.session}>
                    {session?.user ? (
                        <div className={styles.adminNlogout}>
                            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <form action={handleLogout} className={styles.logOutForm}>
                                <button className={styles.logout}>LOG OUT</button>
                            </form>
                        </div>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )}
                    {session?.user ? (<div className={styles.avatarContainer}>
                        <Image
                            className={styles.avatar}
                            src={session.user.user_avatar}
                            alt="avatar"
                            fill />
                    </div>) : null}
                </div>

            </div>
            <Image src={"/menu.png"} alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />

            {open && <div className={styles.mobileLinks}>
                {
                    links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))
                }
            </div>
            }
        </div>
    )
}

export default Links
