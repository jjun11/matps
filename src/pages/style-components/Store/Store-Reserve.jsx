import styled from "styled-components";

export const Container = styled.div`
    /* width: 31rem; */
    width: 100%;

    background-color: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 30px;
    box-shadow: 0px 9px 26px -8px #555555;
    margin-bottom: 1rem;
    flex: 0 0 auto;
`;
export const Storetitle = styled.h2`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
`;
export const CalendarBtn = styled.div`
    width: 100%;
    height: 3rem;
    border-radius: 30px;
    /* background-color: #D9D9D9; */
    border: 3px solid #d94d4d;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
`;
export const Calendar = styled.span`
    font-weight: 900;
`;
export const CalendarIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;