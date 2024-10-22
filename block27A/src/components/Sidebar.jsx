import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="dashboard-sidebar">
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;