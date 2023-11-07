import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; // 너비 넘어가면 줄바꿈
  flex-direction: column; // 요소 정렬방향 지정: 세로
  max-width: 640px; // 최대너비 640px
  height: 1000px;
  background-color: #f8f5ec;
  margin: auto;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div`
  &.logoCl {
    margin-top: 210px;
  }

  &.inputField {
    margin-top: 35px;
  }
  &.hint {
  }
  &.loginBtn {
  }
  &.btm {
    color: #d94d4d;
    font-weight: 400;
    margin-top: 20px;
    font-size: 24px;
    .link_style {
      color: #d94d4d;
      text-decoration-line: none;
    }
  }
`;

export const Input = styled.input`
  width: 500px;
  border: 0px;
  height: 75px;
  margin: 5px;
  font-size: 24px;
  font-weight: 700;
  margin: 5px;
  line-height: normal;
  outline-style: none;
  &::placeholder {
    padding: 0.8em;
    font-weight: 600;
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 500px;
  height: 75px;
  background-color: #d94d4d;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
