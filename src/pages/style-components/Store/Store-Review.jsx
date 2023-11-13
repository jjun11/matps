import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background-color: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 30px;
    box-shadow: 00px 3px 14px -5px #555555;
    margin-bottom: 1rem;
`;
export const ReviewTitle = styled.h2`
    font-size: 2rem;
    font-weight: 900;
`;
export const ReviewBtn = styled.div`
    cursor: pointer;

   span {
    color: #d94d4d;
    font-weight: 900;
    padding-right: 0.5rem;
   }

    img {
        width: 30px;
    }
`;