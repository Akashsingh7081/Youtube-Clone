import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  console.log("Rendering....");
  //heavy opeartion....

  const prime = useMemo(()=> findPrime(text),[text]); 
  return (
    <div
      className={
        "m-4 p-2 w-96 border border-black" +
        (isDarkTheme && " text-green-600 bg-slate-500")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>

      <div>
        <input
          className="border border-black px-2 w-72"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nt prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
