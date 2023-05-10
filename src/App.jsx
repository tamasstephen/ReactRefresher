import { createRoot } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Apollo" animal="Cat" breed="Persian" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
