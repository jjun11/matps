import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem 0 3rem;
`;
export const ConInner = styled.div`
    margin: 1rem 0 3rem;
`;
export const AgreeTitleBox = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;
export const CheckTitle = styled.p`
   font-size: 1.2rem;
   font-weight: 900;
`;
export const Check = styled.img`
    width: 20px;
    height: 20px;
`;
export const ScrollBox = styled.div`
    border: 1px solid #d9d9d9;
    margin-bottom: 3rem;

    overflow-y: scroll;
    overflow-x: hidden;

     /* 가로 스크롤 */
    /* 아래의 모든 코드는 영역::코드로 사용 */
    &::-webkit-scrollbar {
        width: 6px;  /* 스크롤바의 너비 */
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        height: 10px;
        background: #d94d4d; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }
`;  
export const AgreeBox = styled.div`
    width: 100%;
    height: 10rem;
    padding: 10px;
    box-sizing: border-box;
`;
export const AgreeTxt = styled.span`
    font-size: 0.8rem;
    text-wrap: wrap;
    padding: 0 10px;
`;
export const Alert = styled.p`
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 3rem;
`;
export const Button = styled.div`
    width: 8rem;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 900;
    color: #fff;
    background-color: #d94d4d;
    border-radius: 50px;
    cursor: pointer;
`;