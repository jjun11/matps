import styled, { css } from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 80rem; /* 변경: 1280px / 16px = 80rem */
  flex-direction: column;
  max-width: 40rem; /* 변경: 640px / 16px = 40rem */
  height: 67.5rem; /* 변경: 1080px / 16px = 67.5rem */
  background-color: #f8f5ec;
  margin: auto;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  color: #333333;
`;

export const Items = styled.div`
  &.title {
    margin-top: 4.375rem; /* 변경: 70px / 16px = 4.375rem */
    margin-bottom: 1.875rem; /* 변경: 30px / 16px = 1.875rem */
    font-size: 3.125rem;
    font-weight: 800;
  }
  &.prfimg {
    background-color: lightgray;
    width: 13.25rem; /* 변경: 212px / 16px = 13.25rem */
    height: 13.25rem; /* 변경: 212px / 16px = 13.25rem */
    border-radius: 6.6875rem; /* 변경: 107px / 16px = 6.6875rem */
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  &.rounded {
  border-radius: 50%;
  overflow: hidden;
}
  &.nick {
    font-size: 2rem; /* 변경: 32px / 16px = 2rem */
    font-weight: 800;
    margin: 2.5rem; /* 변경: 40px / 16px = 2.5rem */
  }
  &.update {
    width: 35.5625rem; /* 변경: 569px / 16px = 35.5625rem */
    height: 5rem; /* 변경: 80px / 16px = 5rem */
    background-color: #d94d4d;
    color: white;
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:active {
    background-color: #a94a4a;// 클릭 시 
    transform: translateY(2px);}
    
  }
  &.present {
    display: flex;
    justify-content: space-around;
    margin: 1.875rem; /* 변경: 30px / 16px = 1.875rem */
    width: 35.5625rem; /* 변경: 569px / 16px = 35.5625rem */
    height: 7.1875rem; /* 변경: 115px / 16px = 7.1875rem */
    border-radius: 1.25rem; /* 변경: 20px / 16px = 1.25rem */
    background-color: white;
    cursor: pointer;
    &:hover {
      transition: box-shadow 0.5s ease-in-out;
      box-shadow: 0 0 2rem rgba(0, 0, 0, .2);
    }
    &:active {
    box-shadow: inset 0px 1rem 0.5rem rgba(0, 0, 0, .10);
    background-color: #eeeeee;// 클릭 시 
    transform: translateY(2px);}
    
    div {
        margin-top: 1.5625rem; /* 변경: 25px / 16px = 1.5625rem */
      font-size: 0.9375rem;

      p {
        text-align: center;
        font-size: 1.875rem;
        font-weight: 800;
        margin-top: 0.5rem;
      }
    }
  }
  &.link {
    display: flex;
    flex-wrap: wrap;
    width: 35.5625rem; /* 변경: 569px / 16px = 35.5625rem */
    height: 10rem; /* 변경: 160px / 16px = 10rem */
    p {
        width: 35.5625rem; /* 변경: 569px / 16px = 35.5625rem */
        height: 1.25rem; /* 변경: 20px / 16px = 1.25rem */
      font-size: 1.25rem;
      opacity: 0.45;
      font-weight: 600;
    }
    div {
      font-size: 1.5rem;
      font-weight: 600;
      width: 17.75rem; /* 변경: 284px / 16px = 17.75rem */
      height: 2.5rem; /* 변경: 40px / 16px = 2.5rem */
        span {
      cursor: pointer;
      }
    }
  }
  &.foot {
    margin-top: 3.75rem; /* 변경: 60px / 16px = 3.75rem */
    display: flex;
    justify-content: space-between;
    width: 32.5rem; /* 변경: 520px / 16px = 32.5rem */
    div {
      opacity: 0.45;
      font-weight: 600;
      font-size: 1.5rem; /* 변경: 20px / 16px = 1.25rem */
      cursor: pointer;

      &.setting{
        opacity: .3;
        width: 2.25rem;
        height: 2.25rem;
      }
    }
  }
`;
