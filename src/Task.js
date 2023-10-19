import { FaRegTrashAlt } from "react-icons/fa";

export default function Task({ todo, switchTodo, removeTodo }) {
  // const [checked, setChecked] = useState(false);

  return (
    <div className="todo-item">
      <div>
        <label className="task">
          <b>TODO: </b>
          {todo.text}
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => {
              switchTodo(todo);
              // setChecked(!checked);
            }}
          />
          <button className="deleteIcon" onClick={() => removeTodo(todo.id)}>
            <FaRegTrashAlt />
          </button>
        </label>
      </div>
    </div>
  );
}
// function List({ text }) {
//   return (
//     <div>
//       <b>TODO: </b>
//       {text}
//     </div>
//   );
// }
