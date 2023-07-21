import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminHaberler from "./pages/admin/AdminHaberler";
import AdminDuyururlar from "./pages/admin/AdminDuyururlar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/AdminHaberler" element={<AdminHaberler />} />
        <Route path="/AdminDuyurular" element={<AdminDuyururlar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
