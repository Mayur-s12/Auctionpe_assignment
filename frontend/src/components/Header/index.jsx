import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../Button/index";
import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: "#f8fafc",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            color: "#4a4a4a",
            fontWeight: "400",
            cursor: "pointer",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className='display-content'>
            <NavLink
              to='/'
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#f7931e" : "#4a4a4a",
              })}
            >
              <Typography variant='h6'>Session Management</Typography>
            </NavLink>
            <NavLink
              to='/user-dashboard'
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#f7931e" : "#4a4a4a",
              })}
            >
              <Typography variant='h6'>User Dashoard</Typography>
            </NavLink>
          </div>
          <div className='button-container'>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
