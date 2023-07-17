import React from "react";
import styled from "styled-components";

const BeachListWrapper = styled.div`
    width: 100%;
    margin-bottom: 4.5rem;
`;

const BeachListContainer = styled.ul`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    padding: 0;
`;

const BeachListItem = styled.li`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #cdcdcd;
`;

const BeachImgBox = styled.div`
    width: 32px;
    height: 32px;
    background-color: #f3f3f3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const BeachImg = styled.img`
    width: 23px;
    height: 25px;
`;

const BeachTitle = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 90%;
`;

const BeachCityName = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: row;
`;

const DistanceText = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 700;
    align-items: center;
`;

function BeachList() {
    return (
        <BeachListWrapper>
            <BeachListContainer>
                <BeachListItem>
                    <BeachImgBox>
                        <BeachImg src="../assets/img/beach-icon.svg" alt="" />
                    </BeachImgBox>
                    <BeachTitle>
                        <h2>Beach Name</h2>
                        <BeachCityName>
                            <p>Location :</p>
                            <p>Incheon, Korea</p>
                        </BeachCityName>
                    </BeachTitle>
                    <DistanceText>
                        <p>Distance:</p>
                        <p>5km</p>
                    </DistanceText>
                </BeachListItem>
                <BeachListItem>
                    <BeachImgBox>
                        <BeachImg src="../assets/img/beach-icon-1.svg" alt="" />
                    </BeachImgBox>
                    <BeachTitle>
                        <h2>Beach Name</h2>
                        <BeachCityName>
                            <p>Location :</p>
                            <p>Incheon, Korea</p>
                        </BeachCityName>
                    </BeachTitle>
                    <DistanceText>
                        <p>Distance:</p>
                        <p>5km</p>
                    </DistanceText>
                </BeachListItem>
                <BeachListItem>
                    <BeachImgBox>
                        <BeachImg src="../assets/img/beach-icon-2.svg" alt="" />
                    </BeachImgBox>
                    <BeachTitle>
                        <h2>Beach Name</h2>
                        <BeachCityName>
                            <p>Location :</p>
                            <p>Incheon, Korea</p>
                        </BeachCityName>
                    </BeachTitle>
                    <DistanceText>
                        <p>Distance:</p>
                        <p>5km</p>
                    </DistanceText>
                </BeachListItem>
            </BeachListContainer>
        </BeachListWrapper>
    );
}

export default BeachList;
