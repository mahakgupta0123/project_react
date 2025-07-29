import { useState } from "react";

function App() {
  // let counter=0;
  let [counter,setCounter]=useState(0)

  return (
    <>
     <h1>Counter value: {counter}</h1>
     <button onClick={()=>{counter=counter + 1;
      setCounter(counter); console.log(counter)}}>Add value</button>
     <button onClick={()=>{counter=counter - 1;
      setCounter(counter)
     }}>decrease value</button>
    </>
  )
}

export default App
