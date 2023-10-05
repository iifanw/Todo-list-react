import React from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <label className="filter">
        FILTER:
        <select>
          <option value="all">ALL</option>
          <option value="done">DONE</option>
          <option value="not done">NOT DONE</option>
        </select>
      </label>

      <TodoList />
    </div>
  );
}

export default App;
