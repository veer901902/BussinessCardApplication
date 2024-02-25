const express = require("express");
const Card = require("./db.js");
const createCard = require("./types.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
  try {
    const card = await Card.find();
    console.log(card);
    res.json({ cards: card });
  } catch (e) {
    res.status(404).send("Not Found");
  }
});

app.post("/", async (req, res, next) => {
  const data = req.body;

  try {
    const result = createCard.safeParse(data);

    if (!result.success) {
      res.status(403).send("Forbidden: Invalid input");
    } else {
      const val = await Card.create({
        Name: data.Name,
        Description: data.Description,
      });
      res.json("Added the data");
    }
  } catch (e) {
    res.status(400).send("Bad Request");
  }
});


app.delete("/:id", async (req, res, next) => {
  const cardId = req.params.id;
  try {
    await Card.findByIdAndDelete(cardId);
    res.json("Successfully deleted");
  } catch (e) {
    res.status(404).send("Not Found");
  }
});


app.listen(3000, ()=>{
  console.log("Listening on port 3000")
})