const express = require("express");

const app = express();
const port = 8080;

app.use(express.json());

// app.post("/register", (req, res) => {
//     res.json(req.body);
// })

// app.get("/", (req, res) => {
//   res.send("What up, Katie?");
// });

// app.post("/login", (req, res) => {
//   res.send("Post request at /login!");
// });

// app.put("/cart", (req, res) => {
//   res.send("Put request at /cart");
// });

// app.delete("/cart", (req, res) => {
//   res.send("Delete request at /cart");
// });

// app.get("/items/:id", (req, res) => {
//     res.json(req.params);
// })

const fruits = [
  {
    id: 1,
    name: "banana",
  },
  {
    id: 2,
    name: "mango",
  },
  {
    id: 3,
    name: "apple",
  },
  {
    id: 4,
    name: "orange",
  },
  {
    id: 5,
    name: "raspberry",
  },
];

// GET /fruits

app.get("/fruits", (req, res) => {
  res.json(fruits);
});

// GET /fruits by ID

app.get("/fruits/:id", (req, res) => {
  for (let fruit of fruits) {
    console.log(req.params.id);
    if (fruit.id == req.params.id) {
      res.status(200);
      return res.send(fruit);
    }
  }
  res.status(404);
  res.send("Sorry, fruit not found.");
});

// POST /fruits

app.post("/fruits", function (req, res) {
  if (fruits.length > 0 && fruits.some((f) => f.name === req.body.name)) {
    res.status(409);
    return res.send("Fruit already exists.");
  }
  let index = fruits[fruits.length - 1].id + 1;
  const newFruit = {
    id: index,
    name: req.body.name,
  };
  fruits.push(newFruit);
  res.json(newFruit);
});

// PUT /fruits/:id

app.put("/fruits/:id", function (req, res) {
  for (let fruit of fruits) {
    if (fruit.id == req.params.id) {
      fruit.name = req.body.name;
      res.status(200);
      return res.send("Update successful!");
    }
  }
  res.status(404);
  res.send("Sorry, fruit not found.");
});

// DELETE /fruits/:id

app.delete("/fruits/:id", (req, res) => {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].id == req.params.id) {
      fruits.splice(i, 1);
      return res.json({ message: "Fruit deleted" });
    }
  }
  res.json({ message: "No fruit found" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
