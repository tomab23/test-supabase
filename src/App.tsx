import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import EmployeePage from "./pages/EmployeePage";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Login from "./pages/Login";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import EntreprisePage from "./pages/EntreprisePage";


function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<EmployeePage create />} />
      <Route path="/update" element={<EmployeePage create={false} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/entreprise" element={<EntreprisePage />} />
    </Routes>
  );
}

export default App;
