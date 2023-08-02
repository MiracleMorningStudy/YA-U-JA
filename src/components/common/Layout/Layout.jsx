import React from "react";
import NavBar from "../../Nav";
import Header from "../../Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <NavBar />
        </>
    );
};

export default Layout;
