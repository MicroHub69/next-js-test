import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerStyle>
      <div className="container">
        <div className="vindict">
          <h1>Track Library</h1>
          <p>
            Tracks are organised list of courses that will guide your learning
            path through the specific career of your choice. these tracks are
            just here for you to see the courses we teach at Instincthub. Any of
            the tracks are tailored to train you through a particular
            disciplines.
          </p>
        </div>
      </div>
    </BannerStyle>
  );
};

export default Banner;

let BannerStyle = styled.section`
  margin-top: 80px;
  padding: 80px 0 51px;
  color: white;
  background: var(--Main-Gradient);

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 45px;
  }
  h1,
  p {
    color: var(--White) !important;
  }
  .vindict {
    max-width: 650px;
  }
`;
