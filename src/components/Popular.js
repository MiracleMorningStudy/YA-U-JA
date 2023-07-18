import React from "react";
import styled from "styled-components";
import oceanImage1 from "../assets/img/ocean.png";

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
    font-weight: ${({ isBold }) => (isBold ? "500" : "normal")};
    line-height: ${({ isBold }) => (isBold ? "24px" : "16px")};
`;

function PopularList() {
    return (
        <PopularListWrapper>
            <PopularListContainer>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src={oceanImage1} alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText isBold>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src={oceanImage1} alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText isBold>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src={oceanImage1} alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText isBold>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src={oceanImage1} alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText isBold>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
                <PopularListItem>
                    <PopularImgBox>
                        <PopularImg src={oceanImage1} alt="" />
                    </PopularImgBox>
                    <PopularTextBox>
                        <PopularText>Beach Name</PopularText>
                        <PopularText isBold>Rating: 4.5</PopularText>
                    </PopularTextBox>
                </PopularListItem>
            </PopularListContainer>
        </PopularListWrapper>
    );
}

export default PopularList;
