import mongoose from "mongoose";

const connectionString = process.env.DB_CONNECTION_STRING

export default async function conectaNaDB() {
    await mongoose.connect(connectionString)
    return mongoose.connection
} 

// mongodb+srv://<nome-do-user>:<senha-do-user>@<nome-do-banco-de-dados>.p9othsv.mongodb.net/<nome-da-colecao>?retryWrites=true&w=majority