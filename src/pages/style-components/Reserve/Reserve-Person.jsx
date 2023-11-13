import styled from "styled-components";

export const PersonSelect = styled.div`
    width: 70%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
> p {
    font-weight: 900;
}
`;
export const PersonNum = styled.div`
    display: flex;
    box-sizing: border-box;
    >div {
        width: 2rem;
        height: 2rem;
        border: 1px solid #d94d4d;
        box-sizing: border-box;
        line-height: 2rem;
        text-align: center;
        font-size: 1.5rem;
    }
`;
export const NumBtn = styled.img`
    width: 30px;
    height: 30px;
`;
export const Number = styled.p`
    width: 30px;
    height: 30px;
    font-weight: 900;
    color: #d94d4d;
    text-align: center;
    line-height: 30px;
`;

export const Alert = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    line-height: 16px;
    box-sizing: border-box;
    aspect-ratio: 1/0.4;
    background-color: antiquewhite;
> p {
    font-size: 0.8rem;
}
> p:nth-child(1) {
    font-weight: 900;
}

`;
