import React from "react";
import styled from "styled-components";

const CategoryListWrapper = styled.div`
    width: 100%;
    overscroll-behavior: contain; /* Enable touch scroll */
`;

const CategoryListContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 10px;
    overflow: auto;
    padding: 0;
    overscroll-behavior: none; /* Disable pull-to-refresh behavior */

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CategoryListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    width: 164px;
    height: 56px;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #cdcdcd;
    gap: 8px;
    font-weight: 700;
`;

const CategoryImgBox = styled.div`
    width: 32px;
    height: 32px;
    background-color: #f3f3f3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function CategoryList() {
    return (
        <CategoryListWrapper>
            <CategoryListContainer>
                <CategoryListItem>
                    <CategoryImgBox>
                        <img src="../assets/img/beach-icon-1.svg" alt="" />
                    </CategoryImgBox>
                    Top Rated
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryImgBox>
                        <img src="../assets/img/beach-icon-1.svg" alt="" />
                    </CategoryImgBox>
                    Top Rated
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryImgBox>
                        <img src="../assets/img/beach-icon-1.svg" alt="" />
                    </CategoryImgBox>
                    Top Rated
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryImgBox>
                        <img src="../assets/img/beach-icon-1.svg" alt="" />
                    </CategoryImgBox>
                    Top Rated
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryImgBox>
                        <img src="../assets/img/beach-icon-1.svg" alt="" />
                    </CategoryImgBox>
                    Top Rated
                </CategoryListItem>
            </CategoryListContainer>
        </CategoryListWrapper>
    );
}

export default CategoryList;
