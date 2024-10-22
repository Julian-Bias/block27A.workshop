import React from 'react';
import "../styles/Heading.css";

const Heading = () => {
  return (
    <header className="dashboard-heading">
      <h1>Dashboard</h1>
      <div className="profile-section">
        <img src="/path-to-profile-pic" alt="Profile" className="profile-pic" />
        <span>Welcome, User!</span>
      </div>
    </header>
  );
};

export default Heading;