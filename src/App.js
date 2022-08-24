import React from "react";
import Router from "./Routes/Router";
import { ThemeProvider } from "@mui/material";
import theme from "./Constants/theme";
import GlobalState from "./Context/Global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
