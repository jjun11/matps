import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-width: 25rem;

    background-color: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 30px;
    box-shadow: 0px 3px 14px -5px #555555;
    margin-bottom: 1rem;
    flex: 0 0 auto;
`;
export const MenuTitle = styled.h2`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 3rem;
`;
export const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
`;
export const MenuDetail = styled.p`
    font-size: 18px;
    font-weight: 900;
    /* margin-bottom: 1rem; */
`;
export const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 1rem 0 ;
`;