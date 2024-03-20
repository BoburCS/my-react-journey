const fs = require("fs");
const path = require("path");
const users= require("../data/users/users.json");

exports.getUsers = (req, res) => {
    res.json({ users });
}

exports.postUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    
    fs.writeFile(path.join(__dirname, "../data/users/users.json"), JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "An Error Occured." });
        }
    });
    res.status(201).json(newUser);
}
