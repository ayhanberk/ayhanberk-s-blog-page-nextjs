"use client"
import { handleLogin } from "@/lib/actions/authActions";
import styles from "./loginForm.module.css"
import { useFormState, useFormStatus } from "react-dom"
import Link from "next/link";

const LoginForm = () => {

    const [state, credentialsFormAction] = useFormState(handleLogin, undefined);

    return (
        <div className={styles.loginForm}>
            <form className="credentialsLogin" action={credentialsFormAction}>
                <h1>Login</h1>
                <div className={styles.inputbox}>
                    <input type="text" name="username" required />
                    <label htmlFor="">Username</label>
                </div>
                <div className={styles.inputbox}>
                    <input type="password" name="password" required />
                    <label htmlFor="">Password</label>
                </div>
                <div className={styles.forget}>
                    <label htmlFor=""><input type="checkbox" name="remember" />Remember Me</label>
                </div>
                <div className={styles.errorHandler}>
                    {state?.error}
                </div>
                <LoginButton />
                <div className={styles.register}>
                    <Link href={"/forgot-password"}>
                        Forget Password?
                    </Link>
                    <span>&#x2022;</span>
                    <Link href={"/register"}>{"Don't have a account"}</Link>
                </div>
            </form>
        </div>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className={styles.logIn}>
            {pending ? <div className={styles.loader}></div> : "Login"}
        </button>
    )

}

export default LoginForm
