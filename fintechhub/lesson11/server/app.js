const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const users = require("./data/users/users.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
    res.json({users});
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    
    fs.writeFile(path.join(__dirname, "./data/users/users.json"), JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "An error occured"});
        }
        res.status(201).json(newUser);
    })
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
