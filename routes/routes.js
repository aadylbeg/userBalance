const express = require("express");
const app = express();
const user = require("../controllers/userController");

app.get("/user", user.getAllUsers);
app.get("/user/:id", user.getUser);
app.put("/user/:id", user.editUser);

module.exports = app;
