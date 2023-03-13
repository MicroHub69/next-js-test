import { useCallback, useEffect, useState } from "react";
// import Banner from "../../components/Banner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FilteredCourses from "../components/CourseList";
import CourseFilters from "../components/CourseFilter";
import styled from "styled-components";
const CATEGORIES = ["electronics", "Designs", "Web", "woWeb"];
const AllTracks = [
  {
    id: 1,
    title: "Introduction to HTML",
    price: 109.95,
    category: "Web",
    body: "The topic covers the syntax, elements, and attributes of HTML, as well as how to create a simple HTML document structure. It also introduces the concept of semantic HTML, which is the practice of using HTML elements to convey the meaning and structure of content on a web page. By learning the fundamentals of HTML, individuals can create static web pages and build a strong foundation for further web development learning.",
    image:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/html.png",
  },
  {
    id: 2,
    title: "Design a Dashboard in ReactJs",
    price: 22.3,
    category: "Design",
    body: "A dashboard is a visual representation of important data and metrics that can help users monitor and analyze their applications, systems, or businesses.",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Introduction to HTML",
    price: 55.99,
    category: "Web",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },

  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "Web",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "Designs",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    category: "Designs",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    category: "Designs",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    category: "Designs",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    category: "woWeb",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
];
const TrackLibrary = () => {
  const [toggleApp, setToggleAap] = useState(true);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [stepContent, setStepContent] = useState();
  const [width, setWidth] = useState(70);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [state, setState] = useState({
    Courses: AllTracks,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        const filters = new Set(previousState.filters);
        let Courses = AllTracks;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          Courses = Courses.filter((Course) => {
            return filters.has(Course.category);
          });
        }

        return {
          filters,
          Courses,
        };
      });
    },
    [setState]
  );
  useEffect(() => {
    /*
      This code sets up a resize event listener to update
      the screenSize state whenever the window size changes.
    */
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setToggleAap(false);
        setWidth(100);
      } else {
        setToggleAap(true);
        setWidth(70);
      }
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [stepContent]);
  const filters = ["Beginner", "Intermediate", "Advanced"];
  return (
    <section>
      <Navbar
        toggleApp={toggleApp}
        setToggleApp={setToggleAap}
        setWidth={setWidth}
      />

      <Banner />

      <StyledCourses className="container">
        <section className="course_brick">
          <div className="filtersBox" id={isActive ? "activeFilter" : ""}>
            <button onClick={handleClick} className="mix_btn">
              close
            </button>
            <div className="main_Box">
              <h4>Filter</h4>
              <CourseFilters
                categories={CATEGORIES}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="courseChoosed">
            <button onClick={handleClick} className="mix_btn">
              Filter
            </button>
            <FilteredCourses Courses={state.Courses} />
          </div>
        </section>
      </StyledCourses>
      <Footer />
    </section>
  );
};

let StyledCourses = styled.section`
  .course_brick {
    // position: relative;
    display: flex;
    .main_Box {
      // background-color: yellow;
      border-radius: 5px;
      border: var(--borderDefault);
      .filters {
        padding: 15px;
      }
      h4 {
        background: var(--Magnolia);
        padding: 10px 20px;
        border-radius: 5px 5px 0px 0px;

        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .filtersBox {
      width: 20%;
      // background: red;
      padding: 15px;
      padding-top: 70px;
      border-right: var(--borderDefault);
    }
    .courseChoosed {
      width: 80%;
      margin-top: 70px;
      // background: pink;
    }
    @media (min-width: 1011px) {
      .mix_btn {
        display: none;
      }
    }
    @media (max-width: 1011px) {
      .filtersBox {
        width: 100%;
        height: 1000%;
        max-width: 300px;
        position: absolute;

        transform: translateX(-700px);
        transition: 0.3s;
        background: var(--White);
        z-index: 1000;
        left: 0;
      }
      #activeFilter {
        transform: translateX(0px);
      }
      .courseChoosed {
        width: 100%;
      }
    }
  }
`;
/**
 * Use this function if the request is from an endpoint
 *
 */

// useEffect(() => {
//   fetch("")
//     .then((response) => response.json())
//     .then((data) => {
//       setState((prevState) => ({
//         ...prevState,
//         Courses: data,
//       }));
//     })
//     .catch((error) => console.log(error));
// }, []);

// const handleFilterChange = (event) => {
//   setState((previousState) => {
//     let filters = new Set(previousState.filters);
//     let Courses = state.Courses;

//     if (event.target.checked) {
//       filters.add(event.target.value);
//     } else {
//       filters.delete(event.target.value);
//     }

//     if (filters.size) {
//       Courses = Courses.filter((Course) => {
//         return filters.has(Course.category);
//       });
//     }

//     return {
//       filters,
//       Courses,
//     };
//   });
// };

export default TrackLibrary;
