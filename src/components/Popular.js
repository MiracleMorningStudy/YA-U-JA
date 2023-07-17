import React from "react";
import styled from "styled-components";

const PopularListWrapper = styled.div`
    width: 100%;
`;

const PopularListContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 0.625rem;
    overflow: auto;
    padding: 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const PopularListItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 164px;
    height: 210px;
    border-radius: 6px;
    border: 1px solid #cdcdcd;
`;

const PopularImgBox = styled.div`
    width: 100%;
    height: 150px;
`;

const PopularImg = styled.img`
    width: 100%;
    height: 100%;
    border: none;
`;

const PopularTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    padding: 8px;
`;

const PopularText = styled.p`
    font-size: 12px;
    line-height: 16px;

    &:nth-child(2) {
        font-weight: 500;
        line-height: 24px;
    }
`;

function PopularList() {
    return (
        <PopularListWrapper>
            <PopularListContainer>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src="" alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
            </PopularListContainer>
        </PopularListWrapper>
    );
}

export default PopularList;
