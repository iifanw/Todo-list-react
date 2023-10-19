import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [filter, setFilter] = useState("all"); // all, done, notdone

  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST</h1>

        <label className="filter">
          FILTER:<span>&nbsp;</span>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">ALL</option>
            <option value="done">DONE</option>
            <option value="notdone">NOT DONE</option>
          </select>
        </label>

        <TodoList filter={filter} />
      </div>
    </div>
  );
}

export default App;
