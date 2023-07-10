import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../App.css";
import { TaskContext } from "../context/TaskContext";

export default function MyCalendar() {
  const { calendarCheckVisibility } = useContext(TaskContext);
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendar"  style={{display:`${calendarCheckVisibility}`}}>
      <Calendar onChange={onChange} value={value}/>
    </div>
  );
}
