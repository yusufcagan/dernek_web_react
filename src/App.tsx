import React from "react";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminHaberler from "./pages/admin/AdminHaberler";
import AdminDuyururlar from "./pages/admin/AdminDuyururlar";
import UserDuyurular from "./pages/user/UserDuyurular";
import UserHaberler from "./pages/user/UserHaberler";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/AdminHaberler" element={<AdminHaberler />} />
        <Route path="/AdminDuyurular" element={<AdminDuyururlar />} />
        <Route path="/UserDuyurular" element={<UserDuyurular />} />
        <Route path="/UserHaberler" element={<UserHaberler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
