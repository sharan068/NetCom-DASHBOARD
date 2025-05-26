import React, { useState, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

// Lazy-loaded components
const SideBar = lazy(() => import("./Components/Sidebar/SideBar"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const AllCards = lazy(() => import("./Components/CardComponent/AllCards"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setIsSidebarOpen((prev) => !prev);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  return (
    <>
      <HeaderComponent onMenuClick={handleSidebarToggle} />

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={handleSidebarClose} />
      )}

      <Suspense fallback={<div className="loader">Loading Sidebar...</div>}>
        <SideBar isOpen={isSidebarOpen} />
      </Suspense>

      <div className={`dashboard ${isSidebarOpen ? "blurred" : ""}`}>
        <Suspense fallback={<div className="loader">Loading Dashboard...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="dashboard-cards">
                  <Dashboard className="dashboard" />
                  <AllCards />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default App;
