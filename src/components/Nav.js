import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/" id="logo">
        <h1>Outline</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
