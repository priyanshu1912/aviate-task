import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function TimelineChart() {
  return (
    <div style={{ marginTop: "5vh" }}>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent
            fontSize="12px"
            fontFamily="Poppins"
            color="grey"
          >
            27-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            fontSize="14px"
            fontFamily="Poppins"
            fontWeight="600"
            color="#007FFF"
          >
            Application Submitted
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            fontSize="12px"
            fontFamily="Poppins"
            color="grey"
          >
            27-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            fontSize="14px"
            fontFamily="Poppins"
            fontWeight="600"
            color="#007FFF"
          >
            Application Accepted
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            fontSize="12px"
            fontFamily="Poppins"
            color="grey"
          >
            27-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            fontSize="14px"
            fontFamily="Poppins"
            fontWeight="600"
            color="#007FFF"
          >
            Assignment Task
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            fontSize="12px"
            fontFamily="Poppins"
            color="grey"
          >
            27-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            fontSize="14px"
            fontFamily="Poppins"
            fontWeight="600"
            color="#007FFF"
          >
            Interview Scheduled
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            fontSize="12px"
            fontFamily="Poppins"
            color="grey"
          >
            27-08-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent
            fontSize="14px"
            fontFamily="Poppins"
            fontWeight="600"
            color="#007FFF"
          >
            Offer Letter
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineChart;
