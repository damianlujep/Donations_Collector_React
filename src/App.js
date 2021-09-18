import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";
import PrivateRoute from "./routers/PrivateRoute";
import DonationsPage from "./components/donations/DonationsPage";
import PublicRoute from "./routers/PublicRoute";

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
                  <PublicRoute
                      exact
                      path="/rejestracja"
                      isAuthenticated={false}
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