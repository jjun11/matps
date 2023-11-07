import styled, { css } from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 1280px;
    flex-direction: column;
    max-width: 640px;
    height: 1080px;
    background-color: #f8f5ec;
    margin: auto;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
`;

export const Items = styled.div `

&.title {
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: 800;
}
&.prfimg{
    background-color: lightgray;
    width: 212px;
    height: 212px;
    border-radius: 107px;
}
&.nick{
    font-size: 32px;
    font-weight: 800;
    margin: 40px;
}
&.point{
   width : 569px;
   height: 80px;
   background-color: #d94d4d;
color: white;
display: flex;
font-size: 20px;
font-weight: 600;
align-items: center;
justify-content: center;
}
&.present{
    display: flex;
    justify-content: space-around;
    margin: 30px;
    width: 569px;
    height: 115px;
    border-radius: 20px;
    background-color: white;
    div {
        margin-top: 20px;
        font-size: 15px;
        
        p{  text-align: center;
            font-size: 30px;
            font-weight: 800;
            margin: 0px;
        }
    }
}
&.link{
    display: flex;
    flex-wrap: wrap;
    width: 569px;
    height:300px;
    p {
        width:569px;
        font-size: 24;
    }
    div {
        width: 270px;
        height: 40px;
    }
}
`;
