import React from "react";
import GlobalStyle from "./components/GlobalStyle.js";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import MapBox from "./components/MapBox.js";
import Category from "./components/Category.js";
import Popular from "./components/Popular.js";
import BeachList from "./components/Beach.js";
import NavBar from "./components/Nav.js";
import styled from "styled-components";

const Main = styled.main`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
                <SearchBar />
                <MapBox />
                <Category />
                <Popular />
                <BeachList />
            </Main>
            <NavBar />
        </>
    );
}

export default App;
