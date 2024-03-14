"use client"
import { handleRegister } from "@/lib/actions/authActions"
import styles from "./registerForm.module.css"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"


const RegisterForm = () => {

    const [state, formAction] = useFormState(handleRegister, undefined);

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push("/login");

    }, [state?.success, router])


    return (
        <form action={formAction} className={styles.registerForm}>
            <h1>Register</h1>
            <div className={styles.inputbox}>
                <input type="text" name="username" required />
                <label htmlFor="">Username</label>
            </div>
            <div className={styles.inputbox}>
                <input type="email" name="email" required inputMode="email" />
                <label htmlFor="">Email</label>
            </div>
            <div className={styles.inputbox}>
                <input type="password" name="password" required />
                <label htmlFor="">Password</label>
            </div>
            <div className={styles.inputbox}>
                <input type="password" name="passwordCheck" placeholder="" required />
                <label htmlFor="">Password Again</label>
            </div>
            <div className={styles.inputbox}>
                <input type="file" name="avatar" accept="image/png, image/jpeg" />
                <label htmlFor="">Profile Photo</label>
            </div>
            <button className={styles.registerButton}>Register</button>
            <div className={styles.errorHandler}>
                {state?.error}
            </div>
            <span className={styles.sendToLogin}>
                <Link href={"/login"} >Have an Account? <b>Login</b></Link>
            </span>
        </form>
    )
}

export default RegisterForm
