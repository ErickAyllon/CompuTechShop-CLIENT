import "./App.css";
import LoginButton from "./Components/LoginButton";
import LogOutButton from "./Components/LogOutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <h1>Aplicación</h1>
      {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
