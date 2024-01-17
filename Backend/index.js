const express = require("express");
const Card = require("./db.js");
const createCard = require("./types.js");

const app = express();
app.use(express.json());

const newCard = new Card({
  Name: "Example Name",
  Description: "Example Description",
});

app.get("/", async (req, res) => {
  const card = await Card.find();
  res.json(card);
});

app.post("/", async (req, res) => {
  const data = req.body;

  const result = createCard.safeParse(data);

  if (!result.success) {
    res.status(404).json("Invalid Input");
  } else {
    const val = await Card.create({
      Name: data.Name,
      Description: data.Description,
    });
    res.json("Added the data");
  }
});

app.patch("/", async (req, res) => {
  const data = req.body;
});

app.delete("/", async (req, res) => {
  const name = req.body.Name;
  await Card.deleteOne({ Name: name });
  res.json("Successfully deleted");
});

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
