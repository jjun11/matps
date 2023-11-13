import styled from "styled-components";

export const ReviewFlex = styled.div`
  display: flex;
  gap: 2rem;
`;
export const ScrollBox = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;

   /* 가로 스크롤 */
    /* 아래의 모든 코드는 영역::코드로 사용 */
    &::-webkit-scrollbar {
        height: 6px;  /* 스크롤바의 너비 */
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
        width: 30%; /* 스크롤바의 길이 */
        height: 10px;
        background: #d94d4d; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }
`;
export const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 2rem 0;
`;
export const Profile = styled.div`
    margin-bottom: 1rem;
`;
export const ProFileImg = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-1.jpg?alt=media&token=c18d9714-4364-4457-8ef8-20c93863cabd');
    background-size: cover;
    box-shadow: 0px 3px 14px -5px #555555;
    margin-bottom: 1rem;
`;
export const ReviewNickname = styled.p`
    text-align: center;
`;
export const ReviewTxt = styled.p`
    margin-bottom: 1rem;
    line-height: 1.5rem;
`;
export const ReviewArea = styled.div`
    width: calc(100% - 64px - 2rem);
`;
export const ReviewImgFlexBox = styled.div`
    display: flex;
    gap: 1rem;
    width: 120%;
    margin: 5px 0;
`;
export const Images = styled.div`
  width: calc(100% / 4);
  aspect-ratio: 1/1.2;
  border-radius: 5px;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F3-3.jpg?alt=media&token=287a751d-8c9a-4d65-a87b-f873dcc916b6');
  background-size: cover;
  background-position: center;
`;