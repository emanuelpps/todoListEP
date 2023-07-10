import React, { useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({item, index}) {
  const { eraseTask, terminateTask } = useContext(TaskContext);
  return (
    <div className="card" key={index}>
      <div className="card-body">{item}</div>
      <div className="button-card-box">
        <button className="">
          <BsFillCheckCircleFill
            className="check-button"
            onClick={() => terminateTask(item)}
          />
        </button>
        <button>
          <BsFillXCircleFill
            className="cancel-button"
            onClick={() => eraseTask(item)}
          />
        </button>
      </div>
    </div>
  );
}
