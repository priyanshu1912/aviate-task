import React from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineNotifications,
  MdOutlineEmail,
  MdOutlineSearch,
} from "react-icons/md";

function Navbar({ title }) {
  return (
    <div
      style={{
        background: "white",
        marginBottom: "4vh",
        height: "10vh",
        padding: "1vh 1vw",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: "400",
      }}
    >
      <div style={{ fontWeight: "600", fontSize: "20px" }}>{title}</div>
      <div
        style={{
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          gap: "2vw",
          fontWeight: "500",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            padding: "0.5vh 0.5vw",
          }}
        >
          <MdOutlineSearch size={20} color="grey" />
          <input
            type="text"
            style={{ border: "none", outline: "none", fontFamily: "Poppins" }}
            placeholder="Search here"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <MdOutlineEmail size={20} />
          <MdOutlineNotifications size={20} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: "#1F75FE",
              color: "white",
              fontWeight: "500",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            PB
          </div>
          <div>Priyanshu Bhardwaj</div>
          <MdKeyboardArrowDown size={20} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
