// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.

// Skapa två barn-komponenter som använder temat.

// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { ThemeProvider } from "./ThemeContext";
import Theme_Toggler from "./ThemeButton";
import ChildA from "./ChildA";
import ChildB from "./ChildB";



function App() {

  
  return (
    <div>
      <ThemeProvider>
        <ChildA />
        <ChildB />
        <Theme_Toggler />
      </ThemeProvider>
    </div>
  );
}

export default App;
