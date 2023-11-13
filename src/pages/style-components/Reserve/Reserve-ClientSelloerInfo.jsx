import styled from "styled-components";

export const InputBox = styled.div`
    margin: 2.5rem 0 3rem;
`;
export const InfoFlex = styled.label`
    display: flex;
    margin-bottom: 1rem;
    line-height: 40px;
`;
export const InfoTxt = styled.p`
    width: 90px;
    height: 40px;
    font-size: 1.1rem;
    font-weight: 900;
    margin-right: 1rem;
`
export const Info = styled.input.attrs(() => ({
    type: 'text',
})
)`
    width: 300px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid #000;
`