import styled from "styled-components";

export const Container = styled.div`
    /* width: 44rem;     */
    width: 60%;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 3px 14px -5px #555555;
    margin-bottom: 1rem;
    box-sizing: border-box;
    /* flex: 0 0 auto; */
    position: relative;
`;
export const StoreName = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 8rem;
`;

export const StoreDetail = styled.p`
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 1rem;
`;
export const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 3rem 0 ;
`;
export const WishList = styled.div`
  cursor: pointer;

  position: absolute;
  top: 30px;
  right: 30px;

  img {
    width: 30px;
  }
`;