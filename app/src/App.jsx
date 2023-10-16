import "@picocss/pico";

import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider, DataProvider } from "./contexts/ThemeContext";

import IndexPage from "./pages/IndexPage";
import { FormPage } from "./pages/FormPage";

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <IndexPage />
      </ThemeProvider> */}

      <ThemeProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
