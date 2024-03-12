// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.


import { useState } from "react";
function App() {

  const [text, setText] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function handleAddHobby(e) {
    e.preventDefault();
    const newHobby = {
      id: Date.now(),
      text: text,
    };
    setHobbies([...hobbies, newHobby]);
    setText("");
  }

  function handleRemoveHobby(id) {
    setHobbies(hobbies.filter((hobby) => hobby.id !== id));
    setText("");
  }

  return (
    <div>
      <h1>Hobby List</h1>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddHobby}>Add Hobby</button>
      </form>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            {hobby.text}
            <button onClick={() => handleRemoveHobby(hobby.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;
