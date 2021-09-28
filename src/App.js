import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";
import PrivateRoute from "./routers/PrivateRoute";
import DonationsPage from "./components/donations/DonationsPage";
import PublicRoute from "./routers/PublicRoute";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
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
                      component={() => <RegistrationPage/>}
                  />
                  <PrivateRoute
                      exact
                      path="/oddaj-rzeczy"
                      component={() => <DonationsPage/>}
                  />
              </Switch>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;