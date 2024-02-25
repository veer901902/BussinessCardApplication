import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputCard from "./InputCard.jsx";
import Card from "./Card.jsx";

function App() {
  const [cards, setCard] = useState({});
  useEffect(() => {
    // const data = fetch("http://localhost:3000/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setCard(res);
    //     return res;
    //   });

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <InputCard name></InputCard>
      <div>
        {Object.keys(cards).map((key) => (
          <Card card={cards[key]}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
