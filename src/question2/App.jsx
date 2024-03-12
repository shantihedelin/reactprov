// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useState, useEffect } from "react"

function App() {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    setPosts(data);
    console.log(data);
    
  }

  useEffect(() => {
    getData();
  }, []);

  const filteredPosts = posts.filter((item) => (item.id >= 6) && item.userId === 1);
  console.log(filteredPosts)

  function handleClick(id) {
    console.log(id)
  }

  return (
    <main>
      <div className="flex justify-center flex-col">
        <h1 className="flex justify-center">Fetch API</h1>
        <ul>
          {filteredPosts.map((item) => (
            <li className="list-none" key={item.id}>
              <button onClick={() => handleClick(item.id)} >
                <h2>{item.title}</h2>
              </button>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        {/* <button onClick={() => getData()}>Get data</button> */}
      </div>
    </main>
  );
}
export default App;
