import "@picocss/pico";

import { useState } from "react";

import { ThemeProvider } from "./contexts/ThemeContext";

import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <IndexPage />
      </ThemeProvider>
    </>
  );
}

export default App;
