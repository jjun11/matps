import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        min-width: 769px;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
        /* background-color: pink; */
`;

export const StoreImg = styled.div`
        /* width: 19.5rem; */
        width: calc(100% - ((10px * 3) / 4));
        aspect-ratio: 1/1.2;
        background-image: url('https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EC%97%85%EC%B2%B4%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F3-2.jpg?alt=media&token=2c6914c3-76dd-4388-9aca-b158585866f4');
        background-size: cover;
        background-position: center;
        border-radius: 10px;
`;
