import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";



const Navbar: FC = () => {

  const {pathname} = useLocation();

  return (
    <Header>
        <nav>
          <li>
            <Link className={`${pathname === '/'?"active":"" }`} to="/">HTML</Link>
          </li>
          <li>
            <Link className={`${pathname === '/tailwind'?"active":"" }`} to="/tailwind">Tailwind</Link>
          </li>
          <li>
            <Link className={`${pathname === '/about'?"active":"" }`} to="/about">About</Link>
          </li>
        </nav>
    </Header>
  );
};

const Header = styled.header`


  nav {
    list-style-type: none;
    background-color: #333;
    display: flex;
    justify-content: start;
  }

  a {
    display: block;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
  }

  li:last-of-type {
    margin-left: auto;
  }

  li:hover {
    background-color: #111;
  }
  .active {
    background-color: #04aa6d;
  }



  @media screen and (max-width: 600px) {
    ul {
      flex-direction: column;
    }
    li {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Navbar;
