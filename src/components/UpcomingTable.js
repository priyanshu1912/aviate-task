import React from "react";
import { events } from "../constant.js";

function UpcomingTable() {
  return (
    <div
      style={{
        width: "60%",
        border: "1px solid lightgrey",
        padding: "2vh 1.5vw",
        borderRadius: "10px",
        background: "white",
        minHeight: "30vh",
      }}
    >
      <div style={{ fontWeight: "500" }}>Upcoming Appointments</div>
      <div style={{ fontSize: "13px", width: "100%", marginTop: "3vh" }}>
        {events.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid lightgrey",
                marginTop: "2vh",
                padding: "0.5vh 0",
                width: "100%",
              }}
            >
              <div style={{ width: "15%" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "grey",
                  }}
                >
                  Date
                </div>
                <div style={{ fontWeight: "500" }}>{item.date}</div>
              </div>
              <div style={{ width: "15%" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "grey",
                  }}
                >
                  Time
                </div>
                <div style={{ fontWeight: "500" }}>{item.time}</div>
              </div>
              <div style={{ width: "20%" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "grey",
                  }}
                >
                  With
                </div>
                <div style={{ fontWeight: "500" }}>{item.with}</div>
              </div>
              <div style={{ width: "15%" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "grey",
                  }}
                >
                  Status
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    color: item.status === "Confirmed" ? "green" : "orange",
                    background:
                      item.status === "Confirmed" ? "lightgreen" : "#FFE5B4",
                    padding: "0.2vh 0.5vw",
                    borderRadius: "10px",
                    fontSize: "11px",
                    width: "fit-content",
                  }}
                >
                  {item.status}
                </div>
              </div>
              <div style={{ width: "15%" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "grey",
                  }}
                >
                  Link
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <a
                    href={item.link}
                    target="__blank"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    Join Here
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingTable;
