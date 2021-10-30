import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";
import Register from "./pages/Register/Register";
import AuthProvider from "./context/AuthProvider";

// Theme context

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6b0f",
      light: "#ff8b0e",
      dark: "#CF5300",
    },
    warning: {
      main: "#4D1E00",
      light: "#c6b7a8",
      dark: "#400000",
    },
    info: {
      main: "#35364e",
      light: "#9ab3ca",
      dark: "#333333",
    },
  },
  typography: {
    fontFamily: "Overpass",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* /* ---- Auth Context ---- */}
        <AuthProvider>
          <Router>
            <Header />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {/* /* ---- Footer ---- */}
            <Footer />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
