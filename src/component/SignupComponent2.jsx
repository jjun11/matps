import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 80rem; /* 변경: 1280px / 16px = 80rem */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div`
  &.sign {
    margin: 0.9375rem; /* 변경: 15px / 16px = 0.9375rem */
    font-size: 3.125rem; /* 변경: 50px / 16px = 3.125rem */
    font-weight: 800;
  }

  &.logo {
    margin-top: 2.8125rem; /* 변경: 45px / 16px = 2.8125rem */
  }
  &.item2 {
    .inputline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.5rem; /* 변경: 40px / 16px = 2.5rem */
      width: 37.5rem; /* 변경: 600px / 16px = 37.5rem */
    }
  }
`;
export const Input = styled.input`
  width: 25.375rem; /* 변경: 406px / 16px = 25.375rem */
  height: 2.75rem; /* 변경: 44px / 16px = 2.75rem */
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1.875rem; /* 변경: 30px / 16px = 1.875rem */
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.125rem;
  &::placeholder {

    font-weight: 400;
    font-size: 1.125rem; /* 변경: 18px / 16px = 1.125rem */
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */
  }
`;
export const Button = styled.button``;
export const Label = styled.div`
  width: 8.75rem; /* 변경: 140px / 16px = 8.75rem */
  font-size: 1.5rem; /* 변경: 24px / 16px = 1.5rem */
  color: #4e2619;
  text-align: right;
`;
