import mongoose from "mongoose";

const cachorroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    raca: { type: String },
    idade: { type: Number },
    vacinado: { type: Boolean }
}, { versionKey: false }); // config avançada que não vamos utilizar

const cachorro = mongoose.model("cachorros", cachorroSchema);
// a string se refere à coleção no banco

export default cachorro;