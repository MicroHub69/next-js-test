import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../../assets/images/inBlue.jpg";

const Container = styled.div`
  position: absolute;
  background: var(--White);
  width: 270px;
  top: 65px;
  right: 0px;
  z-index: 1000;
  border: var(--borderDefault);
  .nameTruce {
    display: flex;
    padding: 15px;
    border-bottom: var(--borderDefault);
    .dp {
      width: 55px;
      height: 55px;
      margin-right: 15px;
      object-fit: cover;
      border-radius: 50%;
      transform: scale(1);
      transition: 0.3s ease;
      &:hover {
        transform: scale(1.08);
      }
    }
    h4 {
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
    }
    p {
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
  .mini_dp {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    object-fit: cover;
    border-radius: 50%;
    transform: scale(1);
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.08);
    }
  }

  .StepBack {
    padding: 15px;
    border-bottom: var(--borderDefault);
  }
  .fittedGlobe {
    position: relative;
  }
  .ff_layer {
    border-bottom: var(--borderDefault);
    li {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      padding: 9px 10px;
      padding-left: 50px !important;
      position: relative;
      span {
        font-size: 14px;
        color: #737070;
      }
    }
  }
  .option2 {
    border-bottom: var(--borderDefault);
    li {
      position: relative;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      padding: 11px 10px;
      padding-left: 50px !important;
    }
  }
  .allowed_acct {
    display: flex;
    padding: 15px 20px;
    li {
      padding: 0 !important;
      padding-left: 0 !important;
      margin: 0;
    }
    img {
      margin-right: 15px;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.4s ease;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const SubMenu = styled.ul`
  background: var(--White);
  width: 100%;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(768px)"};
  transition: transform 0.3s ease-in-out;
  .appearance {
    padding: 10px 20px;
    p {
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: var(--OldLavender);
    }
    ul {
      li {
        color: var(--Gunmetal);
        cursor: pointer;
        position: relative;
        padding-left: 35px;
      }
    }
  }
`;

const BackButton = styled.button`
  padding: 8px 30px;
  padding-left: 40px;
  border: none;
  position: relative;
  border-radius: 4px;
  color: var(--Gunmetal);
  cursor: pointer;
`;

function MenuDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOption, setPreviousOption] = useState(null);

  const handleOptionClick = (option) => {
    setPreviousOption(selectedOption);
    setSelectedOption(selectedOption === option ? null : option);
  };
  const handleBackClick = () => {
    setSelectedOption(previousOption);
    setPreviousOption(null);
  };
  function handleDeviceTheme() {
    const root = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      root.classList.add("DarkMode");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("DarkMode");
      localStorage.setItem("theme", "light");
    }
  }

  function handleThemeChange(newTheme) {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("DarkMode");
      root.classList.remove("LightMode"); // remove the LightMode class
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("DarkMode"); // remove the DarkMode class
      root.classList.add("LightMode");
      localStorage.setItem("theme", "light");
    }

    // add the Active class to the clicked item
    const activeItem = document.querySelector(`[data-theme="${newTheme}"]`);
    const otherItems = document.querySelectorAll(
      '.theme-selector li:not([data-theme="' + newTheme + '"])'
    );
    activeItem.classList.add("add_check");
    otherItems.forEach((item) => item.classList.remove("add_check"));
  }

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      root.classList.add("DarkMode");
    } else if (storedTheme === "light") {
      root.classList.remove("DarkMode");
    } else {
      // User has no stored preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("DarkMode");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("DarkMode");
        localStorage.setItem("theme", "light");
      }
    }
  });

  return (
    <Container>
      <section className="fittedGlobe">
        {selectedOption && (
          <div className="StepBack">
            <BackButton className="stepBackBtn" onClick={handleBackClick}>
              Back
            </BackButton>
          </div>
        )}
        {!selectedOption && (
          <Menu>
            <div className="nameTruce">
              <img src={Profile} alt="" className="dp" />
              <div>
                <h4>Sterling Bank NG</h4>
                <p>@sterlingbank</p>
              </div>
            </div>
            <ul className="ff_layer">
              <li className="your_courses">Your Course</li>
              <li className="instincthub_b">InstinctHub</li>
              <MenuItem
                className="switch_acct"
                onClick={() => handleOptionClick("option1")}
              >
                Switch Account
              </MenuItem>
              <li className="sign_out">Sign out</li>
            </ul>

            <ul className="option2">
              <MenuItem
                className="appearanceTheme"
                onClick={() => handleOptionClick("option2")}
              >
                Appearance Theme
              </MenuItem>
              <li className="feedbacks">Feedbacks</li>
            </ul>
          </Menu>
        )}
        {selectedOption === "option1" && (
          <SubMenu isOpen={selectedOption === "option1"}>
            <div className="nameTruce">
              <img src={Profile} alt="" className="dp" />
              <div>
                <h4>Sterling Bank NG</h4>
                <p>@sterlingbank</p>
              </div>
            </div>
            <ul className="ff_layer">
              <div className="allowed_acct">
                <img src={Profile} alt="" className="mini_dp" />
                <li>
                  InstinctHub <br /> <span>300 learners</span>{" "}
                </li>
              </div>
              <div className="allowed_acct">
                <img
                  src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
                  alt=""
                  className="mini_dp"
                />
                <li>
                  InstinctHub <br /> <span>300 learners</span>{" "}
                </li>
              </div>
            </ul>
            <ul className="option2">
              <MenuItem className="addAccount">Add Account</MenuItem>
              <li className="sign_out">Sign out</li>
            </ul>
          </SubMenu>
        )}
        {selectedOption === "option2" && (
          <SubMenu isOpen={selectedOption === "option2"}>
            <div className="appearance">
              <p>Settings apply to this browser alone</p>

              <ul className="theme-selector">
                <li
                  data-theme="device"
                  onClick={() => handleThemeChange("device")}
                  className="add_check"
                >
                  Use device theme
                </li>
                <li data-theme="dark" onClick={() => handleThemeChange("dark")}>
                  Dark theme
                </li>
                <li
                  data-theme="light"
                  onClick={() => handleThemeChange("light")}
                >
                  Light theme
                </li>
              </ul>
            </div>
          </SubMenu>
        )}
      </section>
    </Container>
  );
}

export default MenuDropdown;
