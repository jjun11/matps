import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @media screen and (max-width: 1023px) {
    html {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 767px) {
    html {
      min-width: 330px;
      font-size: 8px;
    }
  }
`;

export const Container = styled.div`
div.button{
display: flex;
  justify-content: center;
  align-items: center;
}
button {
      width: 10rem;
      height: 4rem;
      font-size: 3rem;
      background-color: #d94d4d;
      color: white;
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: 0;
      cursor: pointer;
      &:active {
    background-color: darkred;;
    transform: translateY(2px);}
}
      `;