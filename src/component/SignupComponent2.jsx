import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div`
  &.sign {
    margin: 15px;
    font-size: 50px;
    font-weight: 800;
  }

  &.logo {
    margin-top: 45px;
  }
  &.item2 {
    .inputline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      width: 600px;
    }
  }
`;
export const Input = styled.input`
  width: 406px;
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    padding: 15px;
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */
  }
`;
export const Button = styled.button``;
export const Label = styled.div`
width: 140px;
  font-size: 24px;
  color: #4e2619;
  text-align: right;
`;
