import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const LineStyled = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

const data = [
  {
    name: "About Us",
    path: "",
  },
  {
    name: "Our Work",
    path: "work",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const NavItem = ({ path, label, ...rest }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Link to={`/${path}`}>{label}</Link>
      <LineStyled
        {...rest}
        transition={{ duration: 0.75 }}
        initial={{ width: "0%" }}
        animate={{ width: pathname === `/${path}` ? "50%" : "0%" }}
      />
    </>
  );
};

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/" id="logo">
        <h1>Outline</h1>
      </Link>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.name}>
              <NavItem label={item.name} path={item.path} />
            </li>
          );
        })}
      </ul>
    </NavStyled>
  );
};

export default Nav;
