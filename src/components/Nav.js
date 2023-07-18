import React from "react";
import styled from "styled-components";
import logoImage1 from "../assets/img/icon.svg";
import logoImage2 from "../assets/img/icon-1.svg";
import logoImage3 from "../assets/img/icon-2.svg";

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
    background-repeat: no-repeat;
    background-size: cover;
    ${(props) =>
        props.index === 1 &&
        `
    background-image: url(${props.logoImage1});
`}

    ${(props) =>
        props.index === 2 &&
        `
    background-image: url(${props.logoImage2});
`}

${(props) =>
        props.index === 3 &&
        `
    background-image: url(${props.logoImage3});
`}
`;

function NavBar() {
    return (
        <NavBarWrapper className="nav-bar">
            <NavList>
                <NavItem>
                    <NavLink index={1} logoImage1={logoImage1} href="/Map" />
                    Home
                </NavItem>
                <NavItem>
                    <NavLink index={2} logoImage2={logoImage2} href="/vote" />
                    Vote
                </NavItem>
                <NavItem>
                    <NavLink index={3} logoImage3={logoImage3} href="/memo" />
                    Memo
                </NavItem>
            </NavList>
        </NavBarWrapper>
    );
}

export default NavBar;
