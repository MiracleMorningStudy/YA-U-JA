import React from "react";
import SearchBar from "../../components/SearchBar";
import MapBox from "../../components/MapBox";
import Category from "../../components/Category";
import Popular from "../../components/Popular";
import Beach from "../../components/Beach";

const Home = () => {
    return (
        <>
            <SearchBar />
            <MapBox />
            <Category />
            <Popular />
            <Beach />
        </>
    );
};

export default Home;
