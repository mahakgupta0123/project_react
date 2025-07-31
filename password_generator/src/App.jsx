import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");
  const copy = useRef(null)

  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "1234567890";
    if (char) str += "!@#$%^&*(){}[]";

    for (let i = 1; i <= range; i++) {
      let generatePass = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(generatePass);
    }

    setPass(password);

  }, [range, num, char, setPass]);

  useEffect(() => {
    passGenerator();
  }, [range, num, char, setPass]);

  const copyPasswordToClipboard = useCallback(() => {
    copy.current?.select()
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={copy}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={range}
            className="cursor-pointer"
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
          <label>Length: {range}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numberInput"
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
