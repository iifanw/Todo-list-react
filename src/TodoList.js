import React, { useState } from "react";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    setList((prev) => [...prev, inputText]);
    // list.push(inputText);
    // const newList = [...list];
    // setList(newList);
    setInputText("");
  };

  return (
    <div>
      <div>
        {list.map((todo, index) => {
          return (
            <div key={index} className={index}>
              <b>TODO:</b>
              {todo}
            </div>
          );
        })}
      </div>
      {/* <div>{list}</div> */}
      <label className="todo">
        <input
          type="text"
          value={inputText}
          placeholder="YOUR TODO HERE"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={addTodo}>ADD TODO</button>
      </label>
    </div>
  );
}

// function Todo({ text }) {
//   return (
//     <div>
//       <b>TODO: </b>
//       {text}
//     </div>
//   );
// }
