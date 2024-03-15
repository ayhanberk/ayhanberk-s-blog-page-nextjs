
"use server"
import { connect2mongodb } from "../dbs/connect2mongodb";
import { revalidatePath } from "next/cache";
import { Contact } from "../models/models";
import { auth } from "../auth";



export const SendMessageToAyhan = async (prevState, formData) => {
    const { name, email, phone, message } = Object.fromEntries(formData)
    let namedef = name;
    let emaildef = email;
    if (name === undefined && email === undefined) {
        const session = await auth();
        namedef = session.user.username;
        emaildef = session.user.email;

    }


    try {

        // await new Promise(res => setTimeout(res, 5000))
        connect2mongodb();

        const newContact = new Contact({
            name: namedef,
            email: emaildef,
            phone,
            message,
        })

        await newContact.save();
        // revalidatePath("/admin")
        // console.log("message saved")
        return { success: true, message: "Message Send" }

    } catch (err) {
        if (err.name === "ValidationError") {
            let errors = {};

            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            return { success: false, message: "Something went wrong when send message!", errors: errors }

        }

    }
}
export const getContactMessage = async () => {

    try {
        connect2mongodb();
        const Messages = await Contact.find()
        return Messages;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get Messages")
    }

}