import styled, { css } from "styled-components";

export const Input = styled.input`
  margin: auto;
  width: 500px; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.8em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: "Noto Sans KR", sans-serif; /* 폰트 상속 */
  font-size: 24px;
  font-weight: 400;
  border: 0px solid white;
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
  &::placeholder {
    font-weight: 600;
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */}
`;

export const Button = styled.button`
  margin-top: 56px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  width: 500px; /* 원하는 너비 설정 */
  height: 75px;
  color: white;
  background-color: #d94d4d;
  font-size: 24px;
  font-weight: 500;
  border: orange;
  ${(props) =>
    props.enabled &&
    css`
      background-color: orange;
    `};

  &:active {
    border: #999;
    font-weight: 700;
    background-color: #999;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 640px;
  height: 1000px;
  margin: auto;
  background-color: #F8F5EC;

  .success {
    color: royalblue;
  }
  .error {
    color: red;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;

  &.item1 {
    margin-top: 210px;
    margin-bottom: 40px;
    justify-content: center;
  }
  &.item2 {
    justify-content: center;
    margin: 10px, 50px;
    width: 500px;
    height: 75px;
  }
  &.item3 {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
  }
  &.hint {
    margin-top: -5px;
    margin-bottom: 10px;
    margin-right: 40px;
    justify-content: right;
    font-size: 12px;
    color: #999;
  }

  &.btm {
    justify-content: center;
    color: #d94d4d;
    font-weight: 400;
    margin-top: 40px;
    margin-right: 40px;
    font-size: 24px;
    .link_style {
      color: #d94d4d;
      text-decoration-line: none;
    }
  }
  &.bdlogo {
    background-color: #fabd2e;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
  }
`;
