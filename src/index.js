import express, { json } from 'express';
import productController from './controller/product.js'
import {connectToDatabase} from './db/database.js';
import cors from 'cors';

const app = express()

const corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}

app.use(cors(null, corsOptions));

app.use(json());
app.use('/products', productController)

connectToDatabase();

app.listen(3333, () => {
    console.log("Server connected");
})