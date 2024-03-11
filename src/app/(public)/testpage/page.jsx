import { addPost, deletePost } from "@/lib/actions/postActions"

const ServerActionsTest = () => {
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="description" name="body" />
                <input type="text" placeholder="slug" name="slug" />
                <input type="text" placeholder="userId" name="userId" />
                <button className="">Create!</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder="delete post id" name="postId" />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default ServerActionsTest
