"use client"
import { addPost } from "@/lib/actions/postActions";
import styles from "./adminPostForm.module.css";
import { useFormState, useFormStatus } from "react-dom"


const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form className={styles.container} action={formAction}>
            <h1>Add New Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <div className={styles.inputBox}>
                <input type="text" name="title" required />
                <label htmlFor="">Title <span>*</span></label>
            </div>
            <div className={styles.inputBox}>
                <input type="text" name="slug" required />
                <label htmlFor="">Slug <span>*</span></label>
            </div>
            <div className={styles.inputBox}>
                <input type="file" name="img" accept="image/png, image/jpeg" />
                <label htmlFor="">Image</label>
            </div>
            <div className={styles.inputBox}>
                <textarea type="text" name="body" rows={10} required />
                <label htmlFor="">Description<span>*</span></label>
            </div>
            <PostAddButton />
            {state && state.error}
        </form>
    )
}

function PostAddButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className={styles.postAdd}>
            {pending ? <span><div className={styles.loader}></div></span> : <span>{"Add Post"}</span>}
        </button>
    )

}

export default AdminPostForm
