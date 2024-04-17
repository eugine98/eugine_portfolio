import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Example from "./Components/Example";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Example />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
