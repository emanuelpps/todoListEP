import React, { useContext } from "react";
import { BsTrash3 } from "react-icons/bs";
import { TaskContext } from "../context/TaskContext";
import { LuUndo2 } from "react-icons/lu";

export default function TaskFinish({ item, index }) {
  const { trashTask, undoTask } = useContext(TaskContext);
  return (
    <div class="card" key={index}>
        <div class="card-body">{item}</div>
        <div className="button-card-box">
          <button>
            <BsTrash3
              className="trash-button"
              onClick={() => trashTask(item)}
            />
          </button>
          <button>
            <LuUndo2 onClick={() => undoTask(item)}/>
          </button>
      </div>
    </div>
  );
}
