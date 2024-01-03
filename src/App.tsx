import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./viewModel/Home";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Home />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
