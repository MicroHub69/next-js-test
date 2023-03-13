import React, { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAPI, HOST_URL, reqOptions } from "../assets/js/helpFunction";
// import { courses } from "../assets/json/ReactCourseData";

const CourseAccordion = (props) => {
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);
  const [activeStepId, setActiveStepId] = useState(null);
  const { course, module, step } = useParams();

  const reqOption = reqOptions("GET", null);
  useState(() => {
    fetchAPI(
      setData,
      HOST_URL() +
        "/api/v1/courses/courses/Getting-Started-with-Visual-Studio-Code/",
      reqOption,
      true
    );
  });

  console.log("data", data);
  const handleStepClick = (step) => {
    props.setStepContent(step);
    setActiveStepId(step.id);
  };
  useEffect(() => {
    const module_id = Number(module);
    const step_slug = step;

    if (data && data.modules && course && module && step) {
      /*
        use the find() method to find the module with the specified id, 
        and then use the same method to find the step with 
        the specified slug within that module. 
      */
      const module = data.modules.find((module) => module.id === module_id);
      const step = module.steps.find((step) => step.slug === step_slug);
      props.setStepContent(step);
    }
  }, []);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  if (data && data.modules) {
    return (
      <div className="accordion">
        <div className="card">
          <div className="card-body">
            <Link to="">
              <p className="step_back">Getting Started with VScode</p>
            </Link>
            {data.modules.map((module, index) => (
              <div key={module.id}>
                <div className="rc-accordion-header">
                  <div
                    className={`rc-accordion-toggle p-3 ${
                      active === module.id ? "active" : ""
                    }`}
                    onClick={() => handleToggle(module.id)}
                  >
                    {/* <i
                    className={`fa ${
                      active === module.id ? "fa-minus" : "fa-plus"
                    } rc-accordion-icon`}
                  ></i> */}

                    {/* <span class="material-symbols-outlined">add</span> */}

                    <h5 className="rc-accordion-title">{module.title}</h5>
                    <span class="material-symbols-outlined">
                      {active === module.id ? "remove" : "add"}
                    </span>
                  </div>
                </div>
                <div
                  className={`rc-collapse ${
                    active === module.id ? "show" : ""
                  }`}
                >
                  <div className="rc-accordion-body">
                    <ul className="mb-0 mobdro">
                      {module.steps &&
                        module.steps.map((step, index) => (
                          <li
                            className={
                              activeStepId === step.id
                                ? "if_video bold"
                                : "if_video"
                            }
                            key={step.id}
                            onClick={() => handleStepClick(step)}
                          >
                            <Link
                              to={`/courses/${data.id}/${module.id}/${step.slug}/`}
                            >
                              {step.title}
                            </Link>

                            <p className="mt-0">5m 3s</p>
                          </li>
                        ))}
                      <li>Exercise</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="emptyDiv mt-4">
          <p>
            <i>Published by: Sodiq Makinde</i>
          </p>
        </div>
      </div>
    );
  }
};

export default CourseAccordion;
