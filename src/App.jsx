import React, { useState } from "react";
import CounterLogic from "./components/CounterLogic";
import ListViewLogic from "./components/ListViewLogic";

function App() {
  const[count,setCount]=useState(0);
  const[numbers,setNumbers]=useState([]);
  const[isAscending,setIsAscending]=useState(true);

  // Adding the current count to the list
  const AddToListCase=()=>{
    if (count>0 && !numbers.includes(count)) {
      setNumbers([...numbers,count]);
    }
    setCount(0);
  };

  // Toggle  between ascending/descending
  const ToggleSortCase=()=>{
    setIsAscending(!isAscending);
    setNumbers((prev) =>
      [...prev].sort((a, b) => (isAscending ? b-a:a-b))
    );
  };

  // Clearing the list
  const ResetListCase=()=>setNumbers([]);

  // Removing specific item
  const RemoveItemCase=(number)=>{
    setNumbers(numbers.filter((n)=>n !== number));
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center space-y-6 bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-3xl font-bold">Counter & List App</h1>

      <CounterLogic
        counter={count}
        setCounter={setCount}
        addToList={AddToListCase}
      />
      <ListViewLogic
        numbers={numbers}
        sortAsc={isAscending}
        toggleSortCase={ToggleSortCase}
        resetListCase={ResetListCase}
        removeItemCase={RemoveItemCase}
      />
    </div>
  );
}

export default App;
