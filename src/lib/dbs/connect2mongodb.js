import mongoose from "mongoose";

const connection = {};

export const connect2mongodb = async () => {
    try {
        if (connection.isConnected) {
            // console.log("Using existing connection")
            return
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (err) {
        console.log(err)
        throw new Error("DB connection failed \n" + err)
    }

}