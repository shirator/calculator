import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState([]);
  return (
    <div>
      <h1 className="">Calculator</h1>
      <div className="p-2"></div>
      <div className="border-2 rounded-lg p-5">
        <div className="rounded-lg p-8 border-2 flex flex-row-reverse">
          <span className="text-xl">
            {display.length !== 0 ? (
              display
            ) : (
              <span className="animate-pulse">|</span>
            )}
          </span>
        </div>
        <div className="p-5"></div>
        <div
          className="grid grid-cols-4 gap-4"
          onClick={(e) => setDisplay([...display, e.target.innerText])}
        >
          <button className="border-2 rounded-lg"> 1 </button>
          <button className="border-2 rounded-lg"> 2 </button>
          <button className="border-2 rounded-lg"> 3 </button>
          <button className="border-2 rounded-lg"> 4 </button>
          <button className="border-2 rounded-lg"> 5 </button>
          <button className="border-2 rounded-lg"> 6 </button>
          <button className="border-2 rounded-lg"> 7 </button>
          <button className="border-2 rounded-lg"> 8 </button>
          <button className="border-2 rounded-lg"> 9 </button>
          <button className="border-2 rounded-lg"> * </button>
          <button className="border-2 rounded-lg"> / </button>
          <button className="border-2 rounded-lg"> C </button>
          <button className="border-2 rounded-lg col-span-2"> = </button>
          <button className="border-2 rounded-lg"> + </button>
          <button className="border-2 rounded-lg"> - </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
