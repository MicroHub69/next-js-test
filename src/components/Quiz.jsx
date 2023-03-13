import React from "react";
import styled from "styled-components";

const Quiz = () => {
  return (
    <Assessment>
      <h1>Exercise</h1>
      <p>
        We want to know if you have grabbed the information shared or need a
        rewatch. The Quiz contains 7 questions, and you are to answer all of the
        questions.
      </p>

      <h2>Quiz Instruction</h2>
      <ol>
        <li>
          The test contains 7 questions, and there is 7 minutes time limit.
        </li>
        <li>
          You will get 1 point for each correct answer. At the end of the Quiz,
          your total score will be displayed.
        </li>
        <li>Maximum score is 7 points.</li>
        <li>You need a minimum of 5 points to stand a chance to be part.</li>
      </ol>
      <i>Good luck !!!</i>
      <button className="outlined-btn">Start Quiz</button>
    </Assessment>
  );
};

export default Quiz;

let Assessment = styled.section`
  padding: 40px;
  max-width: 870px;
  @media (max-width: 440px) {
    padding: 20px;
  }
  i {
    display: block;
    margin-top: 20px;
  }
  margin-bottom: 50px;
  h1 {
    font-family: var(--Montserat);
    font-weight: 500;
    line-height: 110%;
    font-size: 2.5em;
  }
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;
