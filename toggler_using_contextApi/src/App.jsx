import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
