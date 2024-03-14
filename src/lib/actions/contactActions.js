import { Models } from "../models/models";


export const sendContactMessage = async (prevState, formData) => {
    const { name, email, phone, message } = Object.fromEntries(formData)
    console.log(name, email, phone, message)

    try {

        return { success: true, message: "Gönderildi" }

    } catch (err) {
        console.log(err)
        return { succes: false, message: "Something went wrong when send message!" }
    }

}