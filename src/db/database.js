import { connect } from "mongoose";

const URI = "mongodb+srv://admin:1234@cluster0.2gff74y.mongodb.net/test?retryWrites=true&w=majority"

export const connectToDatabase = async () => {
    await connect(URI)
    console.log("Connected to Database");
}