import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Definir fuentes globales
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Poppins', sans-serif",
      },
      h1: {
        fontFamily: "'DM Sans', sans-serif",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
