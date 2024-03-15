import styles from "./adminContacts.module.css"
import { getContactMessage } from "@/lib/actions/contactActions";


const AdminContact = async () => {
    const data = await getContactMessage();

    return (
        <div className={styles.container}>
            <h1>Messages</h1>
            {data?.map((message, key) => (
                <div className={styles.user} key={key}>
                    <div className={styles.detail}>
                        <span className={styles.title}>{message.name}</span>
                        <span className={styles.title}>{message.email}</span>
                    </div>
                    <div>
                        <form action={"deleteUser"}>
                            <input type="hidden" name="userId" value={message.id} />
                            <button className={styles.deleteBTN}><span>Delete</span></button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminContact
