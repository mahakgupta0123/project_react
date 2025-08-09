import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("color");
  const [text, setText] = useState("text");
  function onClickChange() {
    if (toggle) {
      setColor("black");
      setText("white");
    } else {
      setColor("white");
      setText("black");
    }
  }
  return (
    <>
      <label class="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={toggle}
          class="sr-only peer"
          onChange={() => {
            setToggle((prev) => !prev);
            onClickChange();
          }}
        />
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span>
      </label>
      <div
        className="relative max-w-lg p-8 border bg-black border-gray-100 shadow-xl rounded-xl"
        style={{ backgroundColor: color }}
      >
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          4.3
        </span>

        <div className="mt-4 text-gray-200 sm:pr-8">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: text }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>

          <h5
            className="mt-4 text-xl font-bold text-gray-300"
            style={{ color: text }}
          >
            Science of Chemstry
          </h5>

          <p className="mt-2 text-sm" style={{ color: text }}>
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
