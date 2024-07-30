import React from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-dashboard-container">
      <aside className="sidebar">
        <h2>Admin Page</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Bookings</li>
          <li>Settings</li>
          <li onClick={() => navigate("/admin-login")}>Logout</li>
        </ul>
      </aside>
      <div className="main-content">
        <header>
          <h2 style={{ color: "#ff6347" }}>Admin Dashboard</h2>
        </header>
        <div className="dashboard-grid">
          <div className="dashboard-item green">
            <h3>Total Events</h3>
            <p>11</p>
          </div>
          <div className="dashboard-item pink">
            <h3>Charity Events</h3>
            <p>1</p>
          </div>
          <div className="dashboard-item orange">
            <h3>Corporate Events</h3>
            <p>1</p>
          </div>
          <div className="dashboard-item blue">
            <h3>Cultural Events</h3>
            <p>3</p>
          </div>
          <div className="dashboard-item purple">
            <h3>Education Events</h3>
            <p>0</p>
          </div>
          <div className="dashboard-item yellow">
            <h3>Public Events</h3>
            <p>4</p>
          </div>
          <div className="dashboard-item red">
            <h3>Sports Events</h3>
            <p>1</p>
          </div>
          <div className="dashboard-item teal">
            <h3>Wedding</h3>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
