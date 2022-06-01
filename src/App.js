import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import CreateEmployee from "./components/CreateEmployee";
import CreateSchedule from "./components/CreateSchedule";
import UpdateAvail from "./components/UpdateAvail";

const App = () => {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <CreateEmployee />
      <CreateSchedule />
      <UpdateAvail />
    </div>
  );
};

export default App;
