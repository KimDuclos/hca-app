import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import UpdateAvail from "./components/UpdateAvail";

const App = () => {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <UpdateAvail />
    </div>
  );
};

export default App;
