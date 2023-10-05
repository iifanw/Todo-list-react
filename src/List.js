import React from "react";

export default function List() {
  return (
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
  );
}
