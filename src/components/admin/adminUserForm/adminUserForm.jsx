"use client"
import styles from "./adminUserForm.module.css"
import { useFormState } from "react-dom";
import { addUser } from "@/lib/actions/adminActions";

const AdminUserFrom = () => {
    const [state, formAction] = useFormState(addUser, undefined);
    return (
        <form className={styles.container} action={formAction}>
            <h1>Add New User</h1>
            <div className={styles.inputBox}>
                <input type="text" name="username" required />
                <label htmlFor="">Username<span>*</span></label>

            </div>
            <div className={styles.inputBox}>
                <input type="email" name="email" required inputMode="email" />
                <label htmlFor="">Email<span>*</span></label>

            </div>
            <div className={styles.inputBox}>
                <input type="password" name="password" required />
                <label htmlFor="">Password<span>*</span></label>

            </div>
            <div className={styles.inputBox}>
                <input type="file" name="avatar" accept="image/png, image/jpeg" />
                <label htmlFor="">Profile Photo</label>
            </div>
            <div className={styles.isAdmin}>
                <select name="isAdmin" required>
                    <option value="false">Is Admin?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <button className={styles.userAdd}><span>Add</span></button>
            {state && state.error}
        </form>
    )
}
export default AdminUserFrom
