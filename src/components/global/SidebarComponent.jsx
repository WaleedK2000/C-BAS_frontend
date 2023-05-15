import { menuClasses } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import React, { Component } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

import "./SidebarComponent.scss";

import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <Sidebar className="sidebar-main">
      <div className="sidebar-main">
        <div className="sidebar-top">
          <div className="sidebar-header">
            <img src="/c1.png" width={"60px"} height={"60px"}></img>
            <h1>C-BAS</h1> <br />
          </div>
          <h2>Red Team</h2>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              fontSize: "15px",
              // backgroundColor: "red",
              borderRadius: "10px",
              padding: "20px 50px",

              margin: "20px 20px 0px 20px",
              "&:hover": {
                backgroundColor: "#ff1b1c",
                color: "white",
                transition: "0.5s",
              },
            },
          }}
        >
          <MenuItem prefix={<HomeIcon />} component={<Link to="/red" />}>
            Home
          </MenuItem>
          {/* <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu> */}
          <MenuItem
            prefix={<FiberManualRecordIcon />}
            component={<Link to="/node/view" />}
          >
            {" "}
            Nodes{" "}
          </MenuItem>
          {/* <MenuItem prefix={<Inventory2OutlinedIcon />}> Containers </MenuItem> */}
          <MenuItem
            prefix={<DescriptionOutlinedIcon />}
            component={<Link to="/red/attack_matrix" />}
          >
            Scripts
          </MenuItem>
          {/* <MenuItem prefix={<DescriptionOutlinedIcon />}> Settings </MenuItem> */}
          {/* <MenuItem prefix={<DescriptionOutlinedIcon />}> Logout </MenuItem> */}
        </Menu>
      </div>
    </Sidebar>
  );
}
