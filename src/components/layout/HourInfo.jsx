import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function HourInfo() {
  const {dateCheckVisibility} = useContext(TaskContext);
  const getFullDate = () => {
    const time = new Date();
    const day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    const month =
      time.getMonth() + 1 < 10
        ? "0" + (time.getMonth() + 1)
        : time.getMonth() + 1;
    const year = time.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="fecha text-center" style={{display:`${dateCheckVisibility}`}}>
      <h4 className="time">{getFullDate()}</h4>
    </div>
  );
}
