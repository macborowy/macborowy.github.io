
import { ChakraProvider, defaultSystem, Heading } from "@chakra-ui/react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
