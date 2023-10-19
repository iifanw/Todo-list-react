import { useState } from "react";
import Task from "./Task";
import "./App.css";

export default function TodoList({ filter }) {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const generateId = () => Math.floor(Math.random() * 10000);
  const addTodo = () => {
    const newTodo = {
      text: inputText,
      done: false,
      id: generateId,
    };
    setList((prev) => [...prev, newTodo]);
    // list.push(inputText);
    // const newList = [...list];
    // setList(newList);
    setInputText("");
    // console.log(newTodo);
  };

  const switchTodo = (todo) => {
    todo.done = !todo.done;
    setList([...list]);
  };

  const removeTodo = (id) => {
    const newList = list.filter((e) => id !== e.id);
    setList([...newList]);
  };

  return (
    <div>
      <div>
        {list
          .filter((todo) => {
            if (filter === "all") return true;
            else if (filter === "done") {
              return todo.done === true;
            } else {
              return todo.done === false;
            }
          })
          .map((todo, index) => (
            <Task
              todo={todo}
              switchTodo={switchTodo}
              key={index}
              removeTodo={removeTodo}
            />
          ))}
      </div>

      <label className="todo">
        <input
          type="text"
          value={inputText}
          placeholder="YOUR TODO HERE"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputText !== "") {
              addTodo();
            }
          }}
        />
        <span>&nbsp;</span>
        <button disabled={inputText === ""} onClick={addTodo}>
          ADD TODO
        </button>
      </label>
    </div>
  );

  /* // function List({ text }) {
//   return (
//     <div>
//       <b>TODO: </b>
//       {text}
//     </div>
//   );
// } */

  /* {list.map((todo, index) => {
          return (
            <div key={index}>
              <b>TODO:</b>
              {todo}
            </div>
          );
        })} */
}
