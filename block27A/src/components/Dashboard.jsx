import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Transactions from "./Transactions";
import "../styles/Dashboard.css";

const drawerWidth = 140;

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Heading (AppBar) */}
      <Header drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* Add Dashboard content here */}
        <h1>Dashboard</h1>
        {/* Transaction Bar component */}
        <Transactions />
      </Box>
    </Box>
  );
}

export default Dashboard;
