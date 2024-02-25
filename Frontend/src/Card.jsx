export default function Card({ card }) {
  function handleClick() {
    const cardID = card._id;
    fetch(`http://localhost:3000/${cardID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
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
