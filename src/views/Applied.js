import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import { GoPrimitiveDot } from "react-icons/go";
//import { BsThreeDotsVertical } from "react-icons/bs";
import { entries } from "../constant.js";
import { MdClose } from "react-icons/md";
import TimelineChart from "../components/TimelineChart.js";

function Applied() {
  //const dialog = useRef();
  const [data, setData] = useState(entries);
  const [filter, setFilter] = useState("All");
  //const [current, setCurrent] = useState(null);
  const [timeline, setTimeline] = useState(false);

  useEffect(() => {
    if (filter === "All") {
      setData(entries);
    } else {
      let newData = entries.filter((item) => item.status === filter);
      setData(newData);
    }
  }, [filter]);

  //   useEffect(() => {
  //     const checkClick = (e) => {
  //       if (current && dialog.current && !dialog.current.contains(e.target)) {
  //         setCurrent(null);
  //       }
  //     };

  //     document.addEventListener("click", checkClick);

  //     return () => {
  //       document.removeEventListener("click", checkClick);
  //     };
  //   }, [current]);

  // const removeItem = (id) => {
  //   let newData = entries.filter((item) => item.id !== id);
  //   setData(newData);
  // };

  return (
    <>
      <div style={{ margin: "5vh 0" }}>
        {/* <Navbar title="Applied" /> */}
        <div
          style={{
            width: "95%",
            margin: "auto",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              margin: "3vh 0",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>{entries.length} Applications</div>
            <select
              style={{
                padding: "1vh 1vw",
                outline: "none",
                fontFamily: "Poppins",
                border: "1px solid lightgrey",
                borderRadius: "5px",
              }}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Accepted">Accepted</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          {data.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "2vh 0",
                  padding: "2vh 1.5vw",
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  background: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ textAlign: "center", fontWeight: "500" }}>
                  {index + 1}.
                </div>
                <div
                  style={{
                    width: "15%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "1vw",
                    fontWeight: "500",
                  }}
                >
                  <img src={item.logo} alt="logo" style={{ width: "50px" }} />
                  {item.name}
                </div>
                <div style={{ width: "15%", textAlign: "left" }}>
                  <div style={{ fontSize: "12px", color: "grey" }}>
                    Designation:
                  </div>
                  <div style={{ fontWeight: "500" }}>{item.designation}</div>
                </div>
                <div style={{ width: "15%", textAlign: "left" }}>
                  <div style={{ fontSize: "12px", color: "grey" }}>
                    Applied on:
                  </div>
                  <div style={{ fontWeight: "500" }}>{item.applied}</div>
                </div>
                <div
                  style={{
                    width: "15%",
                    textAlign: "left",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "grey" }}>Status:</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "500",
                    }}
                  >
                    <GoPrimitiveDot
                      size={20}
                      color={
                        item.status === "Accepted"
                          ? "green"
                          : item.status === "Pending"
                          ? "orange"
                          : "red"
                      }
                    />
                    {item.status}
                  </div>
                </div>
                {/* <div style={{ position: "relative" }}>
                <BsThreeDotsVertical
                  size={15}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrent(item.id)}
                />
                {item.id === current && (
                  <div
                    ref={dialog}
                    style={{
                      position: "absolute",
                      right: "-1vw",
                      top: "4vh",
                      background: "white",
                      width: "90px",
                      textAlign: "right",
                      fontSize: "12px",
                      fontWeight: "400",
                      padding: "1vh 1vw",
                      borderRadius: "5px",
                      boxShadow: "0 0 10px lightgrey",
                    }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </div>
                    <div style={{ cursor: "pointer" }}>Show Timeline</div>
                  </div>
                )}
              </div> */}
                <div
                  style={{ fontSize: "12px", color: "blue", cursor: "pointer" }}
                  onClick={() => setTimeline(true)}
                >
                  Show Timeline
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {timeline && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              width: "45%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              background: "white",
              left: "0",
              right: "0",
              margin: "auto",
              padding: "4vh 3vw",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Timeline
              </div>
              <MdClose
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => setTimeline(false)}
              />
            </div>

            <TimelineChart />
          </div>
        </div>
      )}
    </>
  );
}

export default Applied;
