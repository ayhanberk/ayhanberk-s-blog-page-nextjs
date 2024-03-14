"use client"
import styles from "./contactForm.module.css"
import { useFormState, useFormStatus } from "react-dom"
import { SendMessageToAyhan } from "@/lib/actions/contactActions";
import { useEffect, useRef, useState } from "react";

const ContactForm = ({ user }) => {
    const formRef = useRef();

    const [data, formAction] = useFormState(SendMessageToAyhan, undefined);
    const [returnData, setReturn] = useState({ success: null, message: null })

    useEffect(() => {
        if (data?.success == true) {
            formRef.current?.reset();
        }

        if (data) {
            setReturn(data);
            setTimeout(clearTimeout, 3000);
        }

    }, [data])


    function clearTimeout() {
        return setReturn({});
    }

    return (
        <form action={formAction} className={styles.form} ref={formRef}>
            <input type="text" placeholder="Name and Surname" name="name" className={returnData.errors?.name ? styles.error : ""} defaultValue={user?.username ? user.username : null} disabled={user?.username && true} />
            <input type="text" placeholder="Email Address" inputMode="email" name="email" defaultValue={user?.email ? user.email : null} disabled={user?.email && true} />
            <input type="text" placeholder="Phone Number (Optional)" inputMode="phone" name="phone" />
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <div className={styles.message}>{returnData && returnData?.message}</div>
            <SubmitAction />
        </form>
    )
}

function SubmitAction() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} >
            {pending ? <div className={styles.loader}></div> : "Send Message"}
        </button>
    )

}


export default ContactForm
