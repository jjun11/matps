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
  &.FindId {
    margin: 0.9375rem; /* 변경: 15px / 16px = 0.9375rem */
    font-size: 3.125rem; /* 변경: 50px / 16px = 3.125rem */
    font-weight: 800;
  }
  &.title {
    margin-top: 10rem; /* 160px */
    font-size: 3.125rem; /* 50px */
    font-weight: 800; 
    margin-right: 33rem;
    margin-bottom: 2rem;
  }
  &.3 {
   
  }
  &.inputline {
    display: flex;
      align-items: center;
      margin-top: 0.7rem; /* 변경: 40px / 16px = 2.5rem */
      width: 65rem; /* 변경: 600px / 16px = 37.5rem */
  }
  &.5 {
    div {
        
      p {
        
      }
    }
  }
  &.6 {
    
    div {

      &.setting{
        
      }
    }
  }
`;

export const Button = styled.button`
width: 10rem;
    height: 4.8rem;
    background-color: #d94d4d;
    color: white;
    border: 0px;
    font-size: 1.25rem;
    font-weight: 600;
    margin-left: 1rem;
`;
    
    

export const Input = styled.input`
    width: 37.5rem; /* 600px */
    height: 4.6875rem; /* 75px */
    font-size: 2rem;
    padding: 0;
    border: 1px solid rgba(0,0,0,.3) ;
    outline: none;
    margin-left: 2rem;
    &::placeholder { 
        color: #cccccc;
        padding: 1rem;
        font-weight: 600;
        font-size: 1.8rem;
    }
`;

export const Label = styled.div`
    font-size: 2rem;
    font-weight: 600;
    width: 10rem;
    text-align: left; 
`;
