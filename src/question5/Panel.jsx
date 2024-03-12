import { useState } from "react";

export default function Panel({ children, title, collapsible }) {

  const [isCollapsed, setIsCollapsed] = useState(false);

function handleClick() {
setIsCollapsed(!collapsible);
console.log("clicked")
}

  return (
    <div>
      <p>{title}</p>
      {collapsible ? (
        <button onClick={handleClick}>Visa/Dölj</button>
      ) : (
        <p>{children}</p>
      )}
    </div>
  );
}
