import React, { useState } from "react";
import styled from "styled-components";

// 이미지 import
import wine from "../../images/와인.png";
import Love from "../../images/애인.png";
import Coworker from "../../images/동료.png";
import healthy from "../../images/비건.png";
import friend from "../../images/친구.png";
import health from "../../images/다이어트.png";
import family from "../../images/가족.png";
import party from "../../images/연말모임.png";

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-content: center;
  z-index: ; 
`;

const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  height: 94px;
  width: 80px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.1);
  }
`;

const OptionItemInner = styled.div`
  background-color: #d9d9d9;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 10px;
  height: 90px;
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 26px;
`;

const OptionSubItem = styled.div`
  background-color: #d9d9d9;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 0px 0px 10px 10px;
  height: 30px;
  width: 78px;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0px;
`;

const OptionText = styled.div`
  color: #000000;
  font-family: "Noto Sans CJK KR";
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  display: inline-block;
`;

const OptionImage = styled.img`
  height: 50px;
  object-fit: cover;
  width: 48px;
`;

const options = [
  { image: Love, alt: "애인과 함께", text: "애인과 함께" },
  { image: Coworker, alt: "동료와 함께", text: "동료와 함께" },
  { image: healthy, alt: "비건", text: "비건" },
  { image: friend, alt: "친구와 함께", text: "친구와 함께" },
  { image: health, alt: "운동", text: "운동" },
  { image: family, alt: "가족과 함께", text: "가족과 함께" },
  { image: party, alt: "연말 모임", text: "연말 모임" },
  { image: wine, alt: "혼술", text: "혼술" },
];

const HeaderSerarchCon = styled.div`
  height: 312px;
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px) brightness(100%);
  background-color: #00000080;
  border-radius: 0px 0px 30px 30px;
  box-shadow: inset 0px 4px 80px #00000024;
`;

const DetailSearchScreen = () => {
  return (
    <>
      <HeaderSerarchCon>
        <StyledBox>
          {options.map((option, index) => (
            <OptionButton key={index}>
              <OptionItemInner>
                <OptionImage alt={option.alt} src={option.image} />
                <OptionSubItem>
                  <OptionText>{option.text}</OptionText>
                </OptionSubItem>
              </OptionItemInner>
            </OptionButton>
          ))}
        </StyledBox>
      </HeaderSerarchCon>
    </>
  );
};

export default DetailSearchScreen;
