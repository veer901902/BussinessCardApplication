import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputCard from "./components/InputCard.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const {cards} = await response.json();
        setAllCards(cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <InputCard setAllCards={setAllCards} allCards={allCards}></InputCard>
      <div>
        {allCards.map((card) => (
          <Card card={card} setAllCards={setAllCards} allCards={allCards} key={card._id}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
