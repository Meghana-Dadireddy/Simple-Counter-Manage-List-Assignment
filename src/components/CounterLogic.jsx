import React from "react";

function CounterLogic({counter,setCounter,addToList }) {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-500"
        onClick={()=>setCounter(counter-1)}
      >
        -
      </button>
      <span className="text-xl font-semibold">{counter}</span>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-500"
        onClick={()=>setCounter(counter+1)}
      >
        +
      </button>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={addToList}
      >
        Add to List..
      </button>
    </div>
  );}
export default CounterLogic;
