import React from "react";
import styled from "styled-components";
import MatpsLogo from "./images/matps로고.png";
import Header_MatpsLogo from "./images/matps로고.png";

const DivWrapperContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const DivWrapperDiv = styled.div`
  background-color: #ffffff;
  height: 3171px;
  overflow: hidden;
  position: relative;
  width: 1920px;
`;

const DivWrapperOverlap = styled.div`
  height: 2768px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 1920px;
`;

const DivWrapperElement = styled.div`
  background-color: #f2f1f7;
  height: 2692px;
  left: 320px;
  position: absolute;
  top: 76px;
  width: 1280px;
`;

const DivWrapperGroup = styled.div`
  height: 80px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;
`;

const DivWrapperOverlapGroup = styled.div`
  background-image: url(./header.png);
  background-size: 100% 100%;
  height: 237px;
  position: relative;
  top: -3px;
`;

const DivWrapperTalking = styled.img`
  height: 50px;
  left: 1459px;
  object-fit: cover;
  position: absolute;
  top: 18px;
  width: 50px;
`;

const DivWrapperSearchBar = styled.div`
  height: 52px;
  left: 728px;
  position: absolute;
  top: 17px;
  width: 522px;
`;

const DivWrapperSearchWrapper = styled.div`
  background-color: #d94d4d;
  border-radius: 0px 30px 30px 0px;
  height: 52px;
  left: 446px;
  position: absolute;
  top: 0;
  width: 76px;
`;

const DivWrapperSearch = styled.img`
  height: 26px;
  left: 21px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 26px;
`;

const DivWrapperRectangle = styled.div`
  background-color: #e6e6e6;
  border: 3px solid;
  border-color: transparent;
  border-radius: 30px 0px 0px 30px;
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 446px;
`;

const DivWrapperImg = styled.img`
  height: 50px;
  left: 341px;
  position: absolute;
  top: 18px;
  width: 180px;
`;

const DivWrapperUserInterface = styled.img`
  height: 50px;
  left: 1530px;
  object-fit: cover;
  position: absolute;
  top: 18px;
  width: 50px;
`;

const DivWrapperGroup2 = styled.div`
  height: 400px;
  left: -4px;
  position: absolute;
  top: 2771px;
  width: 1920px;
`;

const DivWrapperOverlapGroupWrapper = styled.div`
  height: 400px;
`;

const DivWrapperOverlapGroup2 = styled.div`
  height: 400px;
  position: relative;
  width: 1920px;
`;

const DivWrapperFrame = styled.img`
  height: 80px;
  left: 322px;
  position: absolute;
  top: 144px;
  width: 328px;
`;

const DivWrapperRectangle2 = styled.div`
  background-color: #4e2619;
  height: 400px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;
`;

const DivWrapperGroup3 = styled.div`
  height: 277px;
  left: 636px;
  position: absolute;
  top: 63px;
  width: 332px;
`;

const DivWrapperFlexcontainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  /* gap: 2px; */
  height: 224px;
  left: 0;
  position: absolute;
  top: 0;
  width: 295px;
`;

const DivWrapperText = styled.p`
  align-self: stretch;
  color: #f8f5ec;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
`;

const DivWrapperTextWrapper = styled.span`
  color: #f8f5ec;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
`;

const DivWrapperTextWrapper2 = styled.div`
  color: #f8f5ec;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  height: 24px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 253px;
  white-space: nowrap;
`;

const DivWrapperGroup4 = styled.img`
  height: 135px;
  left: 440px;
  position: absolute;
  top: 117px;
  width: 120px;
`;

const Layout = () => {
  return (
    <DivWrapperContainer>
      <DivWrapperDiv>
        <DivWrapperOverlap>
          <DivWrapperElement />

          <DivWrapperGroup>
            <DivWrapperOverlapGroup>
              <DivWrapperTalking alt="Talking" src="talking-4.png" />

              <DivWrapperSearchBar>
                <DivWrapperSearchWrapper>
                  <DivWrapperSearch alt="Search" src="search-1-1.png" />
                </DivWrapperSearchWrapper>
                <DivWrapperRectangle />
              </DivWrapperSearchBar>

              <DivWrapperImg alt="Group" src={Header_MatpsLogo} />
              <DivWrapperUserInterface
                alt="User interface"
                src="user-interface-2.png"
              />
            </DivWrapperOverlapGroup>
          </DivWrapperGroup>
        </DivWrapperOverlap>

        <DivWrapperGroup2>
          <DivWrapperOverlapGroupWrapper>
            <DivWrapperOverlapGroup2>
              <DivWrapperFrame alt="Frame" src="frame.svg" />
              <DivWrapperRectangle2 />

              <DivWrapperGroup3>
                <DivWrapperFlexcontainer>
                  <DivWrapperText>
                    <DivWrapperTextWrapper>
                      COMPANY_INFO
                      {/* <br /> */}
                    </DivWrapperTextWrapper>
                  </DivWrapperText>

                  {/* <DivWrapperText>
                    <DivWrapperTextWrapper>
                      <br />
                    </DivWrapperTextWrapper>
                  </DivWrapperText> */}

                  <DivWrapperText>
                    <DivWrapperTextWrapper>
                      대표 : 이재성
                      {/* <br /> */}
                    </DivWrapperTextWrapper>
                  </DivWrapperText>

                  <DivWrapperText>
                    <DivWrapperTextWrapper>
                      주소 : 서울 강남구 역삼동
                    </DivWrapperTextWrapper>
                  </DivWrapperText>

                  <DivWrapperText>
                    <DivWrapperTextWrapper>
                      사업자 등록번호 : 999-99-99999
                      <br />
                    </DivWrapperTextWrapper>
                  </DivWrapperText>

                  <DivWrapperText>
                    <DivWrapperTextWrapper>
                      대표번호: 00-0000-0000
                    </DivWrapperTextWrapper>
                  </DivWrapperText>
                </DivWrapperFlexcontainer>

                {/* <DivWrapperTextWrapper2>
                  <b>개인정보 처리방침 | 서비스이용약관</b>
                </DivWrapperTextWrapper2> */}
              </DivWrapperGroup3>

              <DivWrapperGroup4 alt="Group" src={MatpsLogo} />
            </DivWrapperOverlapGroup2>
          </DivWrapperOverlapGroupWrapper>
        </DivWrapperGroup2>
      </DivWrapperDiv>
    </DivWrapperContainer>
  );
};

export default Layout;