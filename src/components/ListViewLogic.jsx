import React from "react";

function ListViewLogic({numbers,sortAsc,toggleSortCase,resetListCase,removeItemCase }) {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      <div className="flex justify-between mb-4">
        <button
          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={toggleSortCase}
        >
          SORT: {sortAsc ? "Descending" : "Ascending"}
        </button>
        <button
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={resetListCase}
        >
          RESET LIST
        </button>
      </div>

      {numbers.length === 0 ? (
        <p className="text-center text-gray-500">No numbers added Yet!</p>
      ) : (
        <ul className="space-y-2">
          {numbers.map((num) => (
            <li
              key={num}
              className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded"
            >
              {num}
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={()=>removeItemCase(num)}
              >
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListViewLogic;
