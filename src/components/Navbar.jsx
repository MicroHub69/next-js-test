import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Ninja Lesson</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about"> About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

let StyledNavbar = styled.section``;
