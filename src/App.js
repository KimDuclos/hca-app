import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import Employees from "./components/Employees";
import CreateSchedule from "./components/CreateSchedule";
import Availability from "./components/Availability";
import { useState } from "react";

const App = () => {
  const [empAvails, setEmpAvails] = useState([]);
  
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Employees />
      <CreateSchedule empAvails={empAvails} />
      <Availability empAvails={empAvails} setEmpAvails={setEmpAvails} />
    </div>
  );
};

export default App;
