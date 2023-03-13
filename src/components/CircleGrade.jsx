import React, { useState, useEffect } from "react";
import styled from "styled-components";
const getColor = (percentage) => {
  if (percentage >= 0 && percentage <= 30) {
    return "rgba(0, 131, 143, 1)";
  } else if (percentage > 30 && percentage <= 60) {
    return "rgba(0, 131, 143, 1)";
  } else {
    return "rgba(0, 131, 143, 1)";
  }
};
const CircleGrade = ({ sqSize, strokeWidth, percentage }) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <YourRange>
      <h3>Completion Rates:</h3>
      <div>
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          {/* <svg width="140px" height="140px" viewBox={viewBox}> */}
          <circle
            className="circle-background"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={getColor(percentage)}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${percentage}%`}
          </text>
        </svg>
        <p>
          You have more total points than <b>{`${percentage}%`}</b> of all other
          students.{" "}
        </p>
      </div>
    </YourRange>
  );
};

CircleGrade.defaultProps = {
  sqSize: 200,
  strokeWidth: 10,
};

export default CircleGrade;

let YourRange = styled.section`
  padding: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 15px;
  }
  div {
    display: flex;
    p {
      margin-left: 30px;
      margin-top: 70px;
    }
  }
`;
