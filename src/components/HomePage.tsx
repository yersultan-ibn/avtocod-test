import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { ReportsPage } from "./ReportsPage/ReportsPage";

export const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
