import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route
                      exact
                      path="/"
                      component={Home}
                  />
                  <Route
                      exact
                      path="/logowanie"
                      component={() => <LoginPage/>}
                  />
                  <Route
                      exact
                      path="/rejestracja"
                      component={() => <RegistrationPage/>}
                  />
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;