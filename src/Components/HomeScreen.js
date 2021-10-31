import Login from "./Login"
import '../Style/HomeScreen.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from "./About";


function HomeScreen() {
    return (
        <Router>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <div class="HomeScreen">
                    <Login />
                </div>
            </Switch>
        </Router>
    )
}

export default HomeScreen
