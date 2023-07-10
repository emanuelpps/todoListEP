import "./App.css";
import FinishTaskBox from "./components/layout/FinishTaskBox";
import FinishTaskBoxCount from "./components/layout/FinishTaskBoxCount";
import PendingTaskBoxCount from "./components/layout/PendingTaskBoxCount";
import TaskBox from "./components/layout/TaskBox";
import TitleBox from "./components/layout/TitleBox";
import Header from "./components/layout/Header";
import MyCalendar from "./components/layout/Calendar";
import { TaskContextProvider } from "./components/context/TaskContext";

function App() {

  return (
    <div className="App">
      <TaskContextProvider>
        <Header />
        <FinishTaskBoxCount />
        <TitleBox />
        <PendingTaskBoxCount />
        <FinishTaskBox/>
        <TaskBox />
        <MyCalendar />
      </TaskContextProvider>
    </div>
  );
}

export default App;
