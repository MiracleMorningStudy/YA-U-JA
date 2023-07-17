import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 6px 0px #0000001f;
  z-index: 1;
  background-color: #fff;
  bottom: 0;
`;

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  gap: 0.625rem;
`;

const NavItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  gap: 0.3125rem;
  font-weight: 700;
`;

const NavLink = styled.a`
  width: 25px;
  height: 25px;
`;

const NavImage = styled.img`
  width: 100%;
  height: 100%;
`;

function NavBar() {
  return (
    <NavBarWrapper className="nav-bar">
      <NavList>
        <NavItem>
          <NavLink href="">
            <NavImage src="../assets/img/icon.svg" alt="맵" />
          </NavLink>
          Home
        </NavItem>
        <NavItem>
          <NavLink href="">
            <NavImage src="../assets/img/icon-1.svg" alt="투표" />
          </NavLink>
          Vote
        </NavItem>
        <NavItem>
          <NavLink href="">
            <NavImage src="../assets/img/icon-2.svg" alt="메모" />
          </NavLink>
          Memo
        </NavItem>
      </NavList>
    </NavBarWrapper>
  );
}

export default NavBar;
