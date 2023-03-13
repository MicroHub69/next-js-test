import React, { useState } from "react";

const CourseFilter = ({ name, category, onFilterChange }) => {
  return (
    <div>
      <div className="checkbox_control">
        <label htmlFor={name} className="label-cbx">
          <input
            id={name}
            // name={name}
            type="checkbox"
            className="invisible"
            value={category}
            onChange={onFilterChange}
          />
          <div className="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 11 8 15 16 6"></polyline>
            </svg>
          </div>
        </label>
        <span> {category}</span>
      </div>
    </div>
  );
};

const CourseFilters = (props) => {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <h5>All Tracks</h5>
      <ul>
        {categories.map((category, index) => (
          <li key={category}>
            <CourseFilter
              name={index}
              category={category}
              onFilterChange={onFilterChange}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CourseFilters;
