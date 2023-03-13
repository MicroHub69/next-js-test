import Link from "next/link";
import React from "react";
import styled from "styled-components";

// function CourseDetails(props) {
//   const { Course } = props;

//   return (
//     <div className="Course-details">
//       <h2>{Course.title}</h2>
//       <div className="category">{Course.category}</div>
//       {/* <Price value={Course.price} /> */}
//     </div>
//   );
// }

// function MainCompo({ Course }) {
//   return (
//     <div key={Course.id} className="Course">
//       <img src={Course.image} />
//       <CourseDetails Course={Course} />
//     </div>
//   );
// }
const FilteredCourses = ({ Courses }) => {
  return (
    <CoursePipe>
      {Courses.map((Course) => (
        <div className="eachTrack">
          <div>
            <img
              src={Course.image}
              // alt=""
            />
          </div>

          <div className="t_details">
            <h4>
              <span class="material-symbols-outlined">monitor_heart</span>Track
            </h4>

            <h5>
              Created by <span>Instincthub</span>
            </h5>
            <Link href={`/course/${Course.id}`}>
              <h1>{Course.title}</h1>
            </Link>

            {Course.body && (
              <p>
                {Course.body.length > 50
                  ? Course.body.slice(0, 50) + "..."
                  : Course.body}
              </p>
            )}
          </div>
        </div>
      ))}
    </CoursePipe>
  );
};

export default FilteredCourses;

let CoursePipe = styled.section`
  transition: all 0.5s;
  @media (min-width: 1011px) {
    margin-left: 20px;
  }
  .eachTrack {
    margin-bottom: 30px;
    background: var(--White);
    box-shadow: var(--shadow);
    border-radius: 5px;
    img {
      width: 100%;
      height: 170px;
      object-fit: cover;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .t_details {
      padding: 10px 15px 40px;
      h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
      }
      h4 {
        span {
          font-size: 18px;
          margin-right: 5px;
          top: 4px;
          position: relative;
        }
        font-family: Nunito;
        font-size: 14px;
        font-weight: 600;
        line-height: 0px;
        letter-spacing: 0em;
        text-align: left;
        margin: 0;
        margin-bottom: 15px;
      }
      h5 {
        span {
          font-family: Nunito;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
        }
        margin-bottom: 10px;
        font-family: Nunito;
        font-size: 14px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // max-height: 200px;
      }
    }
  }
  @media (min-width: 720px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .eachTrack {
      width: 47%;
    }
  }
  @media (min-width: 1011px) {
    .eachTrack {
      width: 32%;
    }
  }
`;
