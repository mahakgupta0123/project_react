import { useState } from "react";
import Card from "./Components/Card";

function App() {
  // let counter=0;
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className="bg-amber-100 text-2xl text-amber-300">Counter value: {counter}</h1>
      <button
        onClick={() => {
          // counter = counter + 1;
          if (counter == 20) {
            alert("you're exceeding value");
            setCounter(20);
          } else {
            setCounter(counter + 1);
          }
        }}
      >
        Add value
      </button>

      <button
        onClick={() => {
          // counter = counter - 1;
          if (counter <= 0) {
            alert("you're going in negative counter");
            setCounter(0);
          } else {
            setCounter(counter - 1);
          }
        }}
      >
        decrease value
      </button>
      <Card name="mahak" heading="cute"/>
      <Card name="nayan" heading="anger"/>
    </>
  );
}

export default App;
