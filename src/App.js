import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import UpdateAvail from "./components/UpdateAvail";
import CreateSchedule from "./components/CreateSchedule";

const App = () => {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <UpdateAvail />
      <CreateSchedule />
    </div>
  );
};

export default App;
