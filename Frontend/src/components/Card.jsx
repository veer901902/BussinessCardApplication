export default function Card({ card, allCards, setAllCards }) {
  function handleClick() {
    const cardID = card._id;
    fetch(`http://localhost:3000/${cardID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const index = allCards.findIndex((elem)=>elem._id == cardID);
    const updatedCards = [...allCards];
    updatedCards.splice(index, 1);
    setAllCards(updatedCards);
  }

  return (
    <div>
      Bussiness Card:
      <ul>
        <li>{card.Name}</li>
        <li>{card.Description}</li>
      </ul>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
