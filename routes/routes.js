const express = require("express");
const app = express();
const user = require("../controllers/userController");

app.get("/users", user.getAllUsers);
app.get("/users/:id", user.getUser);
app.put("/users/:id", user.editUser);

module.exports = app;
