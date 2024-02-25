import { useState } from "react";
import axios from "axios";

export default function InputCard({allCards, setAllCards}) {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ Name: name, Description: des }),
      });
      const updatedCards = [...allCards, { Name: name, Description: des }];
      setAllCards(updatedCards)
    } catch (error) {
      console.log(error);
    }
    setName("");
    setDes("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="POST">
        <input
          placeholder="Enter User Name"
          onChange={(e) => setName((prev) => e.target.value)}
          value={name}
        ></input>
        <input
          placeholder="Enter the description"
          onChange={(e) => setDes((prev) => e.target.value)}
          value={des}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
