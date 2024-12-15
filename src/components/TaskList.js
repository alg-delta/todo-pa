import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((task) => (
        <li className="task" key={task.id}>
          <p
            className={task.isComplete ? "complete" : "text"}
            onClick={() => props.completeTask(task.id)}
          >
            {task.text}
          </p>
          <button
            className="btn"
            type="button"
            onClick={() => props.deleteTask(task.id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
