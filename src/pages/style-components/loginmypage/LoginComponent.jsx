import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; // 너비 넘어가면 줄바꿈
  flex-direction: column; // 요소 정렬방향 지정: 세로
  max-width: 40rem; // 최대너비 640px / 16px = 40rem
  height: 1000px;
  background-color: #f8f5ec;
  margin: auto;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div`
  &.logoCl {
    margin-top: 13.125rem; // 210px / 16px = 13.125rem
  }

  &.inputField {
    margin-top: 2.1875rem; // 35px / 16px = 2.1875rem
  }
  &.hint {
  }
  &.loginBtn {
  }
  &.btm {
    color: #d94d4d;
    font-weight: 400;
    margin-top: 1.25rem; // 20px / 16px = 1.25rem
    font-size: 1.5rem; // 24px / 16px = 1.5rem
    .link_style {
      color: #d94d4d;
      text-decoration-line: none;
    }
  }
`;

export const Input = styled.input`
  width: 31.25rem; // 500px / 16px = 31.25rem
  border: 0px;
  height: 4.6875rem; // 75px / 16px = 4.6875rem
  margin: 0.3125rem; // 5px / 16px = 0.3125rem
  font-size: 1.5rem; // 24px / 16px = 1.5rem
  font-weight: 700;
  margin: 0.3125rem; // 5px / 16px = 0.3125rem
  line-height: normal;
  outline-style: none;
  padding: 0.8rem;
  box-sizing: border-box;
  &::placeholder {
    font-weight: 0.0375rem; // 0.6px / 16px = 0.0375rem
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */
  }
`;

export const Button = styled.button`
  margin-top: 3.125rem; // 50px / 16px = 3.125rem
  width: 31.25rem; // 500px / 16px = 31.25rem
  height: 4.6875rem; // 75px / 16px = 4.6875rem
  color: white;
  font-size: 1.5rem; // 24px / 16px = 1.5rem
  font-weight: 600;
  border: 0px;

   // 활성화 상태 스타일
   background-color: ${props => (props.enabled ? "#d94d4d" : "darkgray")};

   // 로그인 버튼 클릭 시 시각효과
   &:active {
    background-color: ${props => (props.enabled ? "darkred" : "gray")};
    transform: translateY(2px);}
`;
