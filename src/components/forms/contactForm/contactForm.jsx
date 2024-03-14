"use client"
import styles from "./contactForm.module.css"
import { useFormState } from "react-dom"
import { sendContactMessage } from "@/lib/actions/contactActions";
import { useState } from "react";

const ContactForm = () => {

    const [states, setStates] = useState({ loading: false, message: null, success: null })
    // const [state, contactFormAction] = useFormState(sendContactMessage, undefined);

    // const clearMessage = () => {
    //     console.log("burda")
    //     setStates({ ...states, loading: false, message: null, success: null })
    // }
    // const handleSubmit = async () => {
    //     setStates((prevState) => {
    //         console.log(prevState)
    //         return { ...prevState, loading: true }
    //     })
    //     console.log(state)
    //     if (state) {
    //         setStates((prevState) => ({ ...prevState, loading: false, message: state.message, success: state.success }))
    //         setTimeout(clearMessage, 5000)
    //     }
    // }




    return (
        <form action={sendContactMessage} className={styles.form}>
            <input type="text" placeholder="Name and Surname" name="name" />
            <input type="text" placeholder="Email Address" inputMode="email" name="email" />
            <input type="text" placeholder="Phone Number (Optional)" inputMode="phone" name="phone" />
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            {/* <div className={styles.message}>{states.success && states.message}</div> */}
            {/* <button onClick={handleSubmit}>{states.loading ? <div className={styles.loader}></div> : "Send Message"}</button> */}
        </form>
    )
}

export default ContactForm
