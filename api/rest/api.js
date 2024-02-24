// Create API

const user = require("./user.controller");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", user.list);
app.post("/", user.create);
app.get("/:id", user.get);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);

app.get("*", (req, res) => {
  res.status(404).send("Error 404  ");
});

app.listen(port, () => {
  console.log("Start");
});
