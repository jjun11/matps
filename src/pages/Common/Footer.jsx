import React from "react";
import styled from "styled-components";
import MatpsLogo from "../../images/matps로고.png";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  bottom: 0;
  border: 2px solid red;
  background-color: #4e2619;
`;
const FooterTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: white;
`;

const FooterTextINFO = styled.p`
  color: white;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const FooterDetailText = styled.p`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1rem;
  margin: 5px 0;
`;

const FooterTextTerms = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2rem;
  font-weight: 700;
`;

const Logo = styled.img`
  width: 120px;
  height: 135px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 120px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo alt="Matps Logo" src={MatpsLogo} />

      <FooterTextBox>
        <FooterTextINFO>COMPANY_INFO</FooterTextINFO>

        <FooterDetailText>
          대표 : 이재성
          <br />
          <br />
          주소 : 서울 강남구 역삼동
          <br />
          <br />
          사업자 등록번호 : 999-99-99999
          <br />
          <br />
          대표번호: 00-0000-0000
          <br />
          <br />
        </FooterDetailText>

        <FooterTextTerms>
          <b>개인정보 처리방침 | 서비스이용약관</b>
        </FooterTextTerms>
      </FooterTextBox>
    </FooterContainer>
  );
};

export default Footer;
