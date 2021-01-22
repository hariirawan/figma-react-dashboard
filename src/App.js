import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "./containers/Dashboard";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { ThemeContext } from "./context/themeContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <Router>
          <Dashboard />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
