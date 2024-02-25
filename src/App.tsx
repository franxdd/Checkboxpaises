import React, { useState } from "react";

import "./App.css";

function App() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkbox, setCheckBoxes] = useState([
    { label: "India", checked: false },
    { label: "USA", checked: false },
    { label: "France", checked: false },
  ]);
  const handleCheck = (e: any) => {
    const { checked, name } = e.target;
    if (name === "All") {
      setSelectAll(checked);
      setCheckBoxes(checkbox.map((c: any) => ({ ...c, checked })));
    } else {
      const Actualizacion = checkbox.map((item: any) => (item.label === name ? { ...item, checked } : item));
      setCheckBoxes(Actualizacion);

      if (Actualizacion.every((todos) => todos.checked)) {
        setSelectAll(true);
      } else {
        setSelectAll(false);
      }
    }
  };
  return (
    <div className="App">
      <form action="">
        <label htmlFor="">
          <input type="checkbox" checked={selectAll} onChange={handleCheck} name="All" id="" />
          Select All
        </label>
        {checkbox.map((elements, index) => (
          <label htmlFor="" key={index}>
            <input
              type="checkbox"
              onChange={handleCheck}
              checked={elements.checked}
              name={elements.label}
              id=""
            />
            {elements.label}
          </label>
        ))}
      </form>
    </div>
  );
}

export default App;
