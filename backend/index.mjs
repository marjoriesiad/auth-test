import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello bitches!")
})


app.listen(3000, () => console.log("Server is running on port 3000"))


// 
//mongodb+srv://marjoriesiad:<db_password>@cluster0.dhuyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0