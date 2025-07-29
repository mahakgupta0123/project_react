import { useState } from "react";

function App() {
  // let counter=0;
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button
        onClick={() => {
          counter = counter + 1;
          if (counter == 20) {
            alert("you're exceeding value");
            setCounter(20);
          } else {
            setCounter(counter);
          }
        }}
      >
        Add value
      </button>

      <button
        onClick={() => {
          counter = counter - 1;
          if (counter ==0){
            alert("you're going in negative counter");
            setCounter(0);
          } else {
            setCounter(counter);
          }
        }}
      >
        decrease value
      </button>
    </>
  );
}

export default App;
