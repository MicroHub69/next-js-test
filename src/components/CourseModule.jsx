import React, { useState } from "react";
import styled from "styled-components";
import CircleGrade from "./CircleGrade";
import CourseAccordion from "./CourseFAQs";


const CourseModule = (props) => {
  const [percentage, setPercentage] = useState(2);
  return (
    <ModulesAndRange>
      <CircleGrade sqSize={200} strokeWidth={15} percentage={percentage} />
      <CourseAccordion setStepContent={props.setStepContent}/>
    </ModulesAndRange>
  );
};

export default CourseModule;

let ModulesAndRange = styled.section`
  background: #fff;
  height: 100vh;
  position: fixed;
  overflow: auto;
  box-shadow: var(--shadow);
  background: var(--White);
  @media (min-width: 1204px) {
    width: 30%;
    max-width: 450px;
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--DarkCyan);
    border-radius: 10px;
  }
  .emptyDiv {
    margin-left: 20px;
  }
`;
