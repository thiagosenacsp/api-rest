import mongoose from "mongoose";

async function conectarDatabase() {
    mongoose.connect("mongodb+srv://thiagofnobrega:bKbabljjox4nESfO@cluster0.xvuoaop.mongodb.net/senacPetShop?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;

}

export default conectarDatabase;

