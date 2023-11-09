import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 80rem; /* 변경: 1280px / 16px = 80rem */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Noto Sans KR", sans-serif;
  .success {
    color: royalblue;
  }
  .error {
    color: red;
  }
`;

export const Label = styled.div`
  width: 8.75rem; /* 변경: 140px / 16px = 8.75rem */
  font-size: 1.5rem; /* 변경: 24px / 16px = 1.5rem */
  color: #4e2619;
  text-align: right;
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
  &.agree {
    margin-left: 1rem;
    margin-top: 2rem;
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      button{
        height: 2.2rem;
        background-color:#ff7070;
        color: white;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.1rem;
        font-weight: 600;
        padding: 0.5rem;
        border: 0px;
      }

     span {
        text-align: center;
        margin-left : 3rem;
        width: 6rem;
        font-weight: 400;
        font-size: 1.3rem;
        color: royalblue;
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
  &.agree {
    margin:0px;
    margin-top: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  &::placeholder {

    font-weight: 400;
    font-size: 1.125rem; /* 변경: 18px / 16px = 1.125rem */
    color: lightgrey; /* 이 부분은 placeholder 텍스트의 색상을 설정합니다 */
    
  }
`;
export const Button = styled.button`
margin-top: 3rem;
  width: 8rem;
  font-weight: 600;
  font-size: 1.25rem;
  height: 2.875rem;
  border: 0px;
  background-color: ${({ enabled }) => (enabled ? "#d94d4d" : "grey")};
  color: white;
  cursor: ${({ enabled }) => (enabled ? "pointer" : "not-allowed")};
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0rem; /* 20px / 16px = 1.25rem */
`
export const RadioLabel = styled.label`
  margin-right: 0.625rem; /* 10px / 16px = 0.625rem */
  font-size: 1.5rem; /* 16px / 16px = 1rem */
`;

export const RadioInput = styled.input`
appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 1px solid #d94d4d; /* 라디오 버튼 테두리 스타일 */
  border-radius: 50%; /* 라디오 버튼을 원 모양으로 만듦 */
  margin-right: 5rem; /* 5px / 16px = 0.3125rem */
  cursor: pointer;
  &:checked {
    background-color: #d94d4d; /* 선택된 라디오 버튼의 배경색 */
    border: 1px solid #d94d4d; /* 선택된 라디오 버튼의 테두리 스타일 */
  }
  
`;