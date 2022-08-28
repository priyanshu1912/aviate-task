import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

function Sidebar() {
  return (
    <div
      style={{
        width: "20%",
        minHeight: "100vh",
        background: "#13274F",
        color: "lightgrey",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "fixed",
        left: "0",
      }}
    >
      <img
        src="https://www.aviate.jobs/aviate.png"
        alt="logo"
        width="150px"
        style={{ margin: "2vh 0 5vh 2.5vw" }}
      />
      <div style={{ paddingLeft: "4vw" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "white" : "grey",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            margin: "1.5vh 0",
          })}
        >
          <MdHomeFilled size={20} />
          Dashboard
        </NavLink>
        {/* <NavLink
          to="/applied"
          style={({ isActive }) => ({
            color: isActive ? "white" : "grey",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            margin: "1.5vh 0",
          })}
        >
          <MdOutlineFormatListBulleted size={20} />
          Applied
        </NavLink> */}
      </div>
    </div>
  );
}

export default Sidebar;
