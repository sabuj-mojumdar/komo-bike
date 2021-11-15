import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";
import Register from "../src/Pages/Register/Register";
import Dashboard from "../src/Pages/Users/Dashboard/Dashboard";
import NotFoundPage from "../src/Pages/NotFoundPage/NotFoundPage";
import AuthProvider from './Contexts/AuthProvider';
import ExploreAllBike from './Pages/ExploreAllBike/ExploreAllBike';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore-bikes">
              <ExploreAllBike />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
