import React, { useContext, useState } from "react";
import "../../App.css";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskBox() {
  const [inputValue, setInputValue] = useState("");

  const { addTask, task } = useContext(TaskContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTask(inputValue);
    console.log(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask(inputValue);
      console.log(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="task-box">
      <form onSubmit={handleClick} className="input-group mb-3 mt-2 px-2">
        <input
          value={inputValue}
          type="text"
          className="form-control"
          placeholder="Ingrese una Tarea"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          onClick={handleClick}
        >
          AGREGAR
        </button>
      </form>
      <div className="tasks-box">
      {task?.map((item, index) => (
        <TaskCard item={item} index={index} />
      ))}
      </div>
    </div>
  );
}
