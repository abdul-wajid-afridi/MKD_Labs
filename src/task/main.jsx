import React, { useEffect } from "react";
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppCard from "./components/AppCard";
import Navbar from "./components/Navbar";

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <>
          <Navbar />
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          </Routes>
        </>
      );
      break;
    default:
      return (
        <>
          <Routes>
            <Route path="/" element={<AdminLoginPage />} />
            {/* <Route exact path="/admin/login" element={<AdminLoginPage />}/> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      );

      break;
  }
}

function Main() {
  const { state, dispatch } = React.useContext(AuthContext);
  useEffect(() => {
    let token = localStorage.getItem("token");

    token
      ? dispatch({ type: "LOGIN", payload: { token: token, role: "admin" } })
      : localStorage.getItem("token");
  }, [dispatch]);
  return (
    <div className="h-full">
      <div className="flex w-full">
        <div className="w-full">
          <div className="page-wrapper w-full py-10 px-5">
            {!state.isAuthenticated
              ? renderRoutes("")
              : renderRoutes(state.role)}
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Main;
