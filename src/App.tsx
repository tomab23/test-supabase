import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import EmployeePage from "./pages/EmployeePage";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<EmployeePage create />} />
      <Route path="/update" element={<EmployeePage create={false} />} />
    </Routes>
  );
}

export default App;
