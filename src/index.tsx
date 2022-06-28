import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/theme";
import { RTL } from "./utils/RTL";
import "./styles/App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RTL>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RTL>
  </React.StrictMode>
);
