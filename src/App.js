import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";
import PrivateRoute from "./components/PrivateRoute";
import DonationsPage from "./components/donations/DonationsPage";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <PublicRoute
                      exact
                      path="/"
                      isAuthenticated={false}
                      component={Home}
                  />
                  <PublicRoute
                      exact
                      path="/logowanie"
                      isAuthenticated={false}
                      component={() => <LoginPage/>}
                  />
                  <Route
                      exact
                      path="/rejestracja"
                      component={() => <RegistrationPage/>}
                  />
                  <PrivateRoute
                      exact
                      path="/oddaj-rzeczy"
                      isAuthenticated={true}
                      component={() => <DonationsPage/>}
                  />
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;