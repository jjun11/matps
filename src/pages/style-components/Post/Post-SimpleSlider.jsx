import styled from "styled-components";

export const MorePost = styled.div`
    font-size: 40px;
    margin-bottom: 2rem;
    font-weight: bold;
`;

export const MorePost1 = styled.div`
    width: 350px;
    height: 450px;
    box-sizing: border-box;
    img {
        width: 348px;
        height: 450px;
    }
`;

export const MorePost2 = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    height: 100px;
    border-radius: 20px 20px 0px 0px;
    background-color: lightgray;
    justify-content: space-between;
`;

export const MorePost3 = styled.div`
    width: 350px;
    height: 100px;
    border-radius: 0px 0px 20px 20px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SliderContainer = styled.div`
`;

export const PostMore = styled.div`
    display: flex;
    flex-direction: column;
    .slick-prev {
        left: 50px;
        z-index: 1;
    }
    .slick-next {
        right: 120px;
        z-index: 1;
    }

    .slick-next:before {
        font-size: 100px;
        color: black;
    }
    .slick-prev:before {
        font-size: 100px;
        color: black;
    }
`;

export const MoreProfile = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-right: 1rem;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50px;
    }
`;

export const MoreStore = styled.div`
    margin-left: 1rem;
    font-size: 30px;
`

export const MoreScore = styled.div`
    margin-left: 1rem;
    font-size: 20px;
`

export const MoreInfo = styled.div`
    margin-left: 1rem;
    font-size: 20px;
`

export const MoreName = styled.div`
    font-size: 30px;
    margin-right: 1rem;
    font-weight: bold;
`;

export const MoreDate = styled.div`
    font-size: 20px;
`;

export const MoreLeft = styled.div`
    display: flex;
    align-items: center;
`;