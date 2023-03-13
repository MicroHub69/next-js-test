import React from "react";
import styled from "styled-components";
// import searchIcon from "../../assets/svgs/search.svg";
import searchIcon from "../../assets/svgs/search.svg";

const SearchField = (props) => {
  return (
    <SearchFieldTags id={props.id} className="event-input">
      <div className="search_set">
        <img src={searchIcon.src} alt="S" />
        <input
          className="event"
          type="text"
          name="name"
          placeholder="Search for all courses..."
          // onChange={(e) => {
          //   props.setSearchValues(e.target.value);
          // }}
        />
      </div>
    </SearchFieldTags>
  );
};

export default SearchField;

const SearchFieldTags = styled.div`
  border: var(--borderDefault);
  border-radius: 5px;
  position: relative;
  @media (min-width: 1000px) {
    min-width: 350px;
  }
  img {
    width: 24px;
    height: 25px;
    margin-right: 10px;
    position: absolute;
    margin-left: 10px;
    top: 8px;
  }
  input {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border: 0;
    padding: 10px;
    height: auto !important;
    padding-left: 45px;
    color: var(--Gunmetal);
    outline: none;
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;
