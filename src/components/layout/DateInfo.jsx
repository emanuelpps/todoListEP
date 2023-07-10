import { useContext, useEffect, useState } from "react";
import React from "react";
import "../../App.css";
import { TaskContext } from "../context/TaskContext";

export default function DateInfo() {
  const {dateCheckVisibility} = useContext(TaskContext);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const getFullTime = () => {
      const timeH = new Date();
      const hours =
        timeH.getHours() < 10 ? "0" + timeH.getHours() : timeH.getHours();
      const minutes =
        timeH.getMinutes() + 1 < 10
          ? "0" + (timeH.getMinutes() + 1)
          : timeH.getMinutes() + 1;

      return `${hours}:${minutes}`;
    };

    const interval = setInterval(() => {
      const currentTime = getFullTime();
      setCurrentTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hora text-center" style={{display:`${dateCheckVisibility}`}}>
      <h4 className="time">{currentTime}</h4>
    </div>
  );
}
