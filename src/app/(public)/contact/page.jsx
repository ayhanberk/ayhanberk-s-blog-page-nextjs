import Image from "next/image"
import styles from "./contact.module.css"
import ContactForm from "@/components/forms/contactForm/contactForm"
import { auth } from "@/lib/auth"


export const metadata = {
    title: "Contact",
    description: "Ayhan Berk's Contact Page with nextjs",
}

const ContactPage = async () => {

    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={"/contactlastbanner.png"}
                    alt="contact image"
                    className={styles.img}
                    fill />

            </div>
            <div className={styles.formContainer}>
                <ContactForm session={session?.user} />
            </div>
        </div>
    )
}

export default ContactPage
