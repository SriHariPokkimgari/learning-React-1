import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [text, setText] = useState("");
  const obj = {
    red: "This is a red color.",
    green: "This is a green color.",
    black: "This is a black color.",
    blue: "This is a blue color.",
    orange: "This is a orange color.",
    yellow: "This is a yellow color.",
    pink: "This a pink collor.",
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h2
          id="content"
          className="text-white font-bold text-5xl flex justify-center "
        >
          This is a olive colour.
        </h2>
        <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
                document.getElementById("content").innerHTML = obj.red;
              }}
              className="bg-red-600 text-white rounded"
            >
              red
            </button>
            <button
              onClick={() => {
                setColor("green");
                document.getElementById("content").innerHTML = obj.green;
              }}
              className="bg-green-600 text-white rounded"
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("black");
                document.getElementById("content").innerHTML = obj.black;
              }}
              className="bg-black text-white rounded"
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("blue");
                document.getElementById("content").innerHTML = obj.blue;
              }}
              className="bg-blue-600 text-white rounded"
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("orange");
                document.getElementById("content").innerHTML = obj.orange;
              }}
              className="bg-orange-500 text-white rounded"
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("yellow");
                document.getElementById("content").innerHTML = obj.yellow;
              }}
              className="bg-yellow-600 text-white rounded"
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("pink");
                document.getElementById("content").innerHTML = obj.pink;
              }}
              className="bg-pink-400 text-white rounded"
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
