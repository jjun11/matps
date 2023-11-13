import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #333;
  text-align: left;
  font-size: 40px;
  font-weight: 900;
  padding-bottom: 2rem;
`;

export const TopPost = styled.div`
    display: flex;
    width: 1200px;
    color: black;
    height: 400px;
    margin-bottom: 2rem;
    box-shadow: 0px 3px 14px -5px #555555;
    border-radius: 40px;
`;

export const TopPostImg = styled.div`
    width: 400px;
    background-color: lightgray;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 40px 0px 0px 40px;
    font-size: 30px;
    font-weight: bold;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopPostText = styled.div`
    
    width: 800px;
    border-radius: 0px 40px 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

export const TopPostTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
`;

export const TopPostContent = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

export const PostListTop = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: 900;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const Box = styled.div`
`;

export const PostListTitle = styled.div`
`;

export const PostSearchText = styled.input`
    height: 50px;
    width: 400px;
    background-color: lightgray;
    border-radius: 25px 0px 0px 25px;
    border: lightgray;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const PostSearch = styled.div`
    display: flex;
`;

export const PostListSearchBtn = styled.button`
    height: 50px;
    width: 80px;
    background-color: #D94D4D;
    border: none;
    border-radius: 0px 25px 25px 0px;
    font-size: 25px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Post = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

export const PostImg = styled.div`
    width: 380px;
    height: 450px;
    background-color: lightgray;
    margin-bottom: 8px;
    img{
        width: 100%;
        height: 100%;
    }
`;


export const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const PostContentTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostContentTitle1 = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
    
`;

export const PostContentTitle2 = styled.div`
    font-size: 20px;
    margin-bottom: 5px;
`;

export const PostContentTitleInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PostContentTitle3 = styled.div`
    display: flex;
`;

export const PostContentTitle4 = styled.div`
    
`;

export const PostingBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: #D94D4D;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

export const PostBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;
