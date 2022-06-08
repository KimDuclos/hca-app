import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import Employees from "./components/Employees";
import CreateSchedule from "./components/CreateSchedule";
import Availability from "./components/Availability";

const App = () => {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Employees />
      <CreateSchedule />
      <Availability />
    </div>
  );
};

export default App;
