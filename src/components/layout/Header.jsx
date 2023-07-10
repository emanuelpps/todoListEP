import React, { useState, useRef, useContext, useEffect } from "react";
import "../../App.css";
import DateInfo from "./DateInfo";
import HourInfo from "./HourInfo";
import backgroundImages from "../../assets/backgroundImages.json";
import { TaskContext } from "../context/TaskContext";

export default function Header() {
  const [defaultBackground, setDefaultBackground] = useState();
  const {showFinishTask, showDate, showCalendar} = useContext(TaskContext);

  useEffect(() => {
    const appBackground = document.getElementsByClassName("App")[0];
    const randomBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setDefaultBackground(randomBackground.img);
    appBackground.style.backgroundImage = `url(${randomBackground.img})`;
  }, []);
  

  const onClickBackground = (e) => {
    const image = e.target.value;
    console.log("click");
    console.log("img", image);
    const appBackground = document.getElementsByClassName("App")[0];
    appBackground.style.backgroundImage = `url(${image})`;
  };


  return (
    <div className="header">
      <DateInfo />
      <div className="selection">
        <ul className="nav justify-content-center">
          <li className="nav-item  px-2">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={onClickBackground}
            >
              <option defaultValue>Cambiar Fondo</option>
              {backgroundImages.map((element) => (
                <option key={element.img} value={element.img}>
                  {element.title}
                </option>
              ))}
            </select>
          </li>
          <li className="nav-item px-2">
            <div class="form-check">
              <input
                class="form-check-input check-taskfinish"
                type="checkbox"
                onClick={showFinishTask}
                required
              />
              <label class="form-check-label" for="flexCheckChecked">
                Tareas Terminadas
              </label>
            </div>
          </li>
          <li className="nav-item px-2">
            <div class="form-check">
              <input
                class="form-check-input check-date"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onClick={showDate}
              />
              <label class="form-check-label" for="flexCheckChecked">
                Fecha y Hora
              </label>
            </div>
          </li>
          <li className="nav-item px-2">
            <div class="form-check">
              <input
                class="form-check-input check-calendar"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onClick={showCalendar}
              />
              <label class="form-check-label" for="flexCheckChecked">
                Calendario
              </label>
            </div>
          </li>
        </ul>
      </div>
      <HourInfo />
    </div>
  );
}
