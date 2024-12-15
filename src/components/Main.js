import React, { useState } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
export default function Main() {
  const [list, setList] = useState([]);
  const addTask = (task) => {
    // console.log("задача в мейні");
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComplete: false,
    };
    setList([...list, newTask]);
  };
  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };
  const completeTask = (id) => {
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList(newList);
  };
  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
