import mongoose from "mongoose";


export default async function connectToDB(){
    try {
        await mongoose.connect('mongodb+srv://saadshah:UGXb352cga160dg2@cluster0.daxbrqm.mongodb.net/')
        console.log("Database COnnected")
    } catch (error) {
        console.log(error)
    }
}