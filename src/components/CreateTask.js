import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSumbit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не може бути порожнім");
      return;
    }
    if (task.length > 70) {
      alert("Поле не може бути більше 70");
      return;
    }
    console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="Напишіть задачу"
        />
        <button type="submit" className="btn">
          Додати
        </button>
      </form>
    </div>
  );
}
