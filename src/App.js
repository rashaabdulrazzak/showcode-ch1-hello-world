import "./App.css";
import { useState } from "react";
import { say_hello_name } from "./utils/hello_world";

function App() {
  const [uname, setUname] = useState("");
  const [h1Text, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  function handle_change(event) {
    setHeading("");
    setUname(event.target.value);
    console.log(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  async function handle_click(event) {
    event.preventDefault();
    const result = await say_hello_name(uname);
    console.log({ result });
    setHeading(result);
    setUname("");
  }

  return (
    <div className="container">
      <h1> {h1Text} </h1>
      <form onSubmit={handle_click}>
        <input
          onChange={handle_change}
          type="text"
          placeholder="What's your name?"
          value={uname}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
