import { handleFormLogin } from "@/lib/actions/authActions";
import styles from "./login.module.css"
import LoginForm from "@/components/forms/loginForm/loginForm";
import Image from "next/image";

const LoginPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LoginForm />
                <div className={styles.otherLoginTypes}>
                    <form action={handleFormLogin} className={styles.githubLogin}>
                        <button className={styles.github}>
                            <div className={styles.githubContainer}>
                                <Image src={"/github.svg"} alt="githubimage" fill />
                            </div>
                            <span>Login With GitHub</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
