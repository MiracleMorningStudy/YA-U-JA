import React from "react";
import styled from "styled-components";
import logoImage1 from "../assets/img/icon.svg";
import logoImage2 from "../assets/img/icon-1.svg";
import logoImage3 from "../assets/img/icon-2.svg";

const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #fff;
`;

const HeaderBar = styled.div`
    width: 100%;
    box-shadow: 0px 0px 6px 0px #0000001f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
`;

const Heading = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
`;

const HeaderLink = styled.a`
    text-decoration: none;
    border: none;
    color: #de2e5f;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    gap: 0.625rem;
`;

const MenuItem = styled.li`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
`;

const MenuItemLink = styled.a`
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: calc(50% - 1px) calc(50% - 1px);

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

function Header(props) {
    return (
        <HeaderWrapper>
            <HeaderBar>
                <Heading>
                    <HeaderLink href="#">YA-U-JA!</HeaderLink>
                </Heading>
                <MenuList>
                    <MenuItem>
                        <MenuItemLink index={1} logoImage1={logoImage1} href="/Map" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink index={2} logoImage2={logoImage2} href="/Map" />
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink index={3} logoImage3={logoImage3} href="/Map" />
                    </MenuItem>
                </MenuList>
            </HeaderBar>
        </HeaderWrapper>
    );
}

export default Header;
