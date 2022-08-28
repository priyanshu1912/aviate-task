import React from "react";
import Chart from "react-apexcharts";
import { entries } from "../constant.js";

function PieChart() {
  //let total = entries.length;
  let accepted = entries.filter((item) => item.status === "Accepted").length;
  let pending = entries.filter((item) => item.status === "Pending").length;
  let rejected = entries.filter((item) => item.status === "Rejected").length;

  const options = {
    labels: ["Accepted", "Pending", "Rejected"],
    colors: ["#0BDA51", "#FFC72C", "#FF033E"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: "#373d3f",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    chart: {
      fontFamily: "Poppins",
    },
  };
  const series = [accepted, pending, rejected];

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        padding: "2vh 1.5vw",
        borderRadius: "10px",
        width: "30%",
        background: "white",
      }}
    >
      <div style={{ marginBottom: "1.5vh", fontWeight: "500" }}>
        Application Stats
      </div>
      <Chart options={options} series={series} type="donut" width="320" />
    </div>
  );
}

export default PieChart;
