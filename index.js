const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("What up, Katie?");
});

app.post("/login", (req, res) => {
  res.send("Post request at /login!");
});

app.put("/cart", (req, res) => {
  res.send("Put request at /cart");
});

app.delete("/cart", (req, res) => {
  res.send("Delete request at /cart");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
