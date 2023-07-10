import React, { useContext } from "react";
import "../../App.css";
import TaskFinish from "./TaskFinish";
import { TaskContext } from "../context/TaskContext";

export default function FinishTaskBox() {
  const { finishTask, finishBoxVisibility } = useContext(TaskContext);

  

    return (
      <div id="finish-box" className="finish-task-box" style={{display:`${finishBoxVisibility}`}}>
        {finishTask.map((item, index) => (
          <TaskFinish item={item} index={index} key={index} />
        ))}
      </div>
    );
  }
