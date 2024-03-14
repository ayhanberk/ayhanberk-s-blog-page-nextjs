import Image from "next/image"
import styles from "./contact.module.css"
import ContactForm from "@/components/forms/contactForm/contactForm"


export const metadata = {
    title: "Contact",
    description: "Ayhan Berk's Contact Page with nextjs",
}

const ContactPage = () => {


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
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage
