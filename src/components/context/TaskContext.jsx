import { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext("");

const { Provider } = TaskContext;

const useApiContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [countTask, setCountTask] = useState(0);
  const [finishTask, setFinishTask] = useState([]);
  const [finishTaskCount, setFinishTaskCount] = useState(0);
  const [showTaskFinish, setShowTaskFinish] = useState(true);
  const [finishBoxVisibility, setFinishBoxvisibility] = useState("none");
  const [dateCheck, setDateCheck] = useState(true);
  const [dateCheckVisibility, setDateCheckVisibility] = useState("none");
  const [calendarCheck, setCalendarCheck] = useState(true);
  const [calendarCheckVisibility, setCalendarCheckVisibility] = useState("none")

  const addTask = (value) => {
    const newTask = [...task, value];
    setTask(newTask);
    setCountTask(task.length + 1);
    localStorage.setItem("task", JSON.stringify(newTask));
    localStorage.setItem("countTask", JSON.stringify(task.length + 1));
  };
  
  const terminateTask = (value) => {
    setTask(task.filter((element) => element !== value));
    const deadTasks = task.filter((element) => value === element);
    setFinishTask([...finishTask, deadTasks]);
    setCountTask(task.length - 1);
    setFinishTaskCount(finishTask.length + 1);
    localStorage.setItem("task", JSON.stringify(task.filter((element) => element !== value)));
    localStorage.setItem("finishTask", JSON.stringify([...finishTask, deadTasks]));
    localStorage.setItem("countTask", JSON.stringify(task.length - 1));
    localStorage.setItem("finishTaskCount", JSON.stringify(finishTask.length + 1));
  };
  
  const trashTask = (item) => {
    const trash = finishTask.filter((element) => item !== element);
    setFinishTask([...trash]);
    setFinishTaskCount(finishTask.length - 1);
    localStorage.setItem("finishTask", JSON.stringify([...trash]));
    localStorage.setItem("finishTaskCount", JSON.stringify(finishTask.length - 1));
  };
  
  const eraseTask = (value) => {
    setTask(task.filter((element) => value !== element));
    setCountTask(task.length - 1);
    localStorage.setItem("task", JSON.stringify(task.filter((element) => value !== element)));
    localStorage.setItem("countTask", JSON.stringify(task.length - 1));
  };
  
  const undoTask = (value) => {
    setFinishTask(finishTask.filter((element) => element !== value));
    const undoTasks = finishTask.filter((element) => value === element);
    setTask([...task, undoTasks]);
    setCountTask(task.length + 1);
    setFinishTaskCount(finishTask.length - 1);
    localStorage.setItem("finishTask", JSON.stringify(finishTask.filter((element) => element !== value)));
    localStorage.setItem("task", JSON.stringify([...task, undoTasks]));
    localStorage.setItem("countTask", JSON.stringify(task.length + 1));
    localStorage.setItem("finishTaskCount", JSON.stringify(finishTask.length - 1));
  };
  

  const showFinishTask = () => {
    setShowTaskFinish(!showTaskFinish);
    if (showTaskFinish) {
      setFinishBoxvisibility("");
    } else if (showTaskFinish === false) {
      setFinishBoxvisibility("none");
    }
  };

  const showDate = () => {
    setDateCheck(!dateCheck);
    if (dateCheck){
      setDateCheckVisibility("");
    }else if(dateCheck === false){
      setDateCheckVisibility("none");
    }
  }

  const showCalendar = () => {
    setCalendarCheck(!calendarCheck);
    if(calendarCheck){
      setCalendarCheckVisibility("");
    }else if(calendarCheck === false){
      setCalendarCheckVisibility("none");
    }
  }
  

  console.log("NEWTASK=>", task);
  console.log("legth", countTask);
  console.log(showTaskFinish);

  const context = {
    addTask,
    countTask,
    eraseTask,
    trashTask,
    terminateTask,
    task,
    setCountTask,
    finishTask,
    finishTaskCount,
    showFinishTask,
    undoTask,
    finishBoxVisibility,
    showDate,
    dateCheckVisibility,
    showCalendar,
    calendarCheckVisibility
  };

  return <Provider value={context}>{children}</Provider>;
};

export default useApiContext;
