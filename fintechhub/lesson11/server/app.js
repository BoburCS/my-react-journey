const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", usersRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
