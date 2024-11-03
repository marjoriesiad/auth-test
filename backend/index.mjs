import express from "express";
import { connectDB } from "./db/connectDb.mjs";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.mjs";

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send("Hello bitches!");
})

app.use('/', authRoutes);


app.listen(3000, () => {
    connectDB();
    console.log('Server running.');
})


