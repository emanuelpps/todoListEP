import React, { useContext } from "react";
import "../../App.css"
import { TaskContext } from "../context/TaskContext";

export default function PendingTaskBoxCount() {
  const { countTask } = useContext(TaskContext);

  return (
    <div className="pending-task-box-count">
      <h3 className="text-center">Tareas Pendientes: {countTask}</h3>
    </div>
  );
}
