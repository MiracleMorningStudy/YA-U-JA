import React from "react";
import styled from "styled-components";
import seachIcon from "../assets/img/ic-search.svg";

const SearchBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const SearchForm = styled.form`
    margin-top: 3.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SearchLabel = styled.label`
    /* Add your label styles here */
`;

const SearchInput = styled.input`
    width: 100%;
    height: 36px;
    border-radius: 5px;
    padding: 4px 4px 4px 12px;
    position: relative;
    border: 1px solid #cdcdcd;

    &:focus,
    &:valid {
        outline: none;
        background-color: #f3f3f3;
        border: none;
    }
`;

const SearchButton = styled.button`
    width: 36px;
    height: 28px;
    border-radius: 5px;
    position: absolute;
    border: none;
    background-color: #000;
    right: 5px;
    top: 4px;
    background-image: url(${seachIcon});
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        box-shadow: 1px 4px 8px #cdcdcd;
    }

    &:active {
        background-color: #414141;
    }
`;

function SearchBar() {
    return (
        <SearchBarWrapper>
            <SearchForm>
                <SearchLabel htmlFor="searchInput"></SearchLabel>
                <SearchInput type="text" id="searchInput" placeholder="어디로 놀러갈까?" />
                <SearchButton></SearchButton>
            </SearchForm>
        </SearchBarWrapper>
    );
}

export default SearchBar;
