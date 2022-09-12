import mongoose  from "mongoose";

mongoose.connect('mongodb://meu-mongo:27017/alura-node');

let db = mongoose.connection;

export default db;