import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Flowers from "./components/Flowers";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import CreateAccModal from "./modals/CreateAccModal";
import LoginModal from "./modals/LoginModal";
import ProfileModal from "./modals/ProfileModal";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Main />
        <Flowers />
        <Switch>
          <Route path="/signup" exact component={CreateAccModal} />
          <Route path="/login" exact component={LoginModal} />
          <Route path="/profile" exact component={ProfileModal} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
