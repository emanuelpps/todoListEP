import React, { useContext } from "react";
import "../../App.css";
import { TaskContext } from "../context/TaskContext";

export default function FinishTaskBoxCount() {
  const {finishTaskCount} = useContext(TaskContext);
  return (
    <div className="finish-task-box-count">
      <h3 className="text-center">Tareas Terminadas:{finishTaskCount}</h3>
    </div>
  );
}
