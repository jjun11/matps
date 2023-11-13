import React, { Component } from "react";
import { PostContainer, PostTitle, Post1, Post1Title, Post1Info, Post1Profile, Post1User, Post1UserInfo, Post1Name, Post1Data, Post1Date, Post1View, Post1Comment, Post1Store, Post1Detail, Post1Btn, Post1Btn1, Post1Btn2, Post2, Post2Commenting, Post2Commenting1, Post2Commenting2, Post2Commenting3, Post2Commenting4, Post2Btn, Post2Comment, Post2Comment1, Post2Comment2, Post2Comment3, Post2Comment4, Post2Comment5, Post2Comment6, Post2MoreBtn, Post2More, Post3 } from "../../style-components/Post/Post-Post";
import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../style-components/Global_style";



const Post = () => {
  const navigate = useNavigate();

  const post1 = [
    {
      title: "게시글 제목",
      store: "상호명",
      image:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-1.jpg?alt=media&token=c18d9714-4364-4457-8ef8-20c93863cabd",
      username: "게시자 닉네임",
      date: "게시 날짜",
      view: "조회수 0",
      comment: "댓글 0",
      text: "물건을 구매할 때와 마찬가지로 식당을 선택할 때도 여러 요소를 고려하게 됩니다. 이번에 방문한 식당은 제 기대를 충족시켰고, 그 경험에 대한 리뷰를 공유하고자 합니다.먼저 식당의 분위기가 정말 좋았습니다. 현대적이면서도 아늑한 느낌이었고, 조명과 가구가 잘 어우러져 이국적인 분위기를 조성했습니다. 이런 분위기는 데이트나 특별한 자리에 이상적입니다.식당의 메뉴는 다양하고 풍부했는데, 특히 새로운 요리를 시도하고 싶을 때 유용합니다. 저는 해산물 파스타를 시킴으로써 색다른 맛을 경험했는데, 이 요리의 맛과 신선한 재료에 감동받았습니다. 또한, 와인 메뉴도 다양하게 구성돼 있어 음식과 와인을 완벽하게 조화시킬 수 있었습니다.서비스 측면에서도 만족스러웠습니다. 직원들은 친절하고 프로페셔널하게 응대해 주었으며, 음식에 대한 정보와 추천을 해 주어서 선택에 큰 도움이 되었습니다.가격 대비 가치도 좋았습니다. 제가 주문한 음식은 품질이 뛰어나고 양이 푸짐해서 만족스러웠습니다.마지막으로, 이 식당은 위치가 편리했습니다. 주변에 주차 시설이 잘 마련되어 있고, 도보로 이동하기 쉬운 거리에 위치해 있어 다양한 고객층에게 편리합니다.이 식당 방문은 정말 즐거운 경험이었고, 다음 번에도 또 방문하고 싶다는 생각이 들 정도로 만족스러웠습니다. 그래서 여기를 추천하고 싶습니다. 식사와 분위기 모두 훌륭하고, 가격도 합리적입니다. 맛있는 음식을 즐기고 싶다면 꼭 한 번 방문해보세요!",
      detailimage:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F19-1.jpg?alt=media&token=e1c33ef3-b6a3-475f-944d-c40afd103272",
    },
  ];

  const post2 = [
    {
      userimg:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-10.jpg?alt=media&token=a2d3a9d7-4852-4e65-9d59-9ec23078ceed",
      user: "닉네임 1",
      comment: "댓글 1",
      date: "작성 날짜",
    },
    {
      userimg:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-11.jpg?alt=media&token=d72f525f-715d-4b86-ba28-50987721eb50",
      user: "닉네임 2",
      comment: "댓글 2",
      date: "작성 날짜",
    },
    {
      userimg:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-12.jpg?alt=media&token=6523652b-2331-4db1-8065-2714a12106f5",
      user: "닉네임 3",
      comment: "댓글 3",
      date: "작성 날짜",
    },
    {
      userimg:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-13.png?alt=media&token=e44ef422-9c72-4f6f-9567-78d08a494794",
      user: "닉네임 4",
      comment: "댓글 4",
      date: "작성 날짜",
    },
    {
      userimg:
        "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-14.jpg?alt=media&token=f0ca77c5-ed50-4963-898b-314e7c9a024d",
      user: "닉네임 5",
      comment: "댓글 5",
      date: "작성 날짜",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PostContainer>
        <PostTitle>게시판</PostTitle>
        {post1.map((post1) => (
          <Post1>
            <Post1Title>
              {post1.title} - {post1.store}
            </Post1Title>
            <Post1Info>
              <Post1User>
                <Post1Profile>
                  <img src={post1.image}></img>
                </Post1Profile>
                <Post1UserInfo>
                  <Post1Name>{post1.username}</Post1Name>
                  <Post1Data>
                    <Post1Date>{post1.date}</Post1Date>
                    <Post1View>{post1.view}</Post1View>
                    <Post1Comment>{post1.comment}</Post1Comment>
                  </Post1Data>
                </Post1UserInfo>
              </Post1User>
              <Post1Store>해당 가게 페이지로 이동 ⇒</Post1Store>
            </Post1Info>
            <Post1Detail>
              <img src={post1.detailimage}></img>
              <br />
              {post1.text}
            </Post1Detail>
          </Post1>
        ))}

        <Post1Btn>
          <Post1Btn1>수정</Post1Btn1>
          <Post1Btn2>삭제</Post1Btn2>
        </Post1Btn>
        <Post2>
          <Post2Commenting>
            <Post2Commenting1>
              <Post1Profile>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-1.jpg?alt=media&token=c18d9714-4364-4457-8ef8-20c93863cabd"
                  }
                ></img>
              </Post1Profile>
              <Post2Commenting2>
                <Post1Name>게시자 닉네임</Post1Name>
                <Post2Commenting3 placeholder="댓글을 입력하세요."></Post2Commenting3>
                <Post2Commenting4>
                  <Post2Btn>글쓰기</Post2Btn>
                </Post2Commenting4>
              </Post2Commenting2>
            </Post2Commenting1>
          </Post2Commenting>
          {post2.map((post2) => (
            <Post2Comment>
              <Post2Comment1>
                <Post2Comment2>
                  <img src={post2.userimg}></img>
                </Post2Comment2>
                <Post2Comment3>
                  <Post2Comment4>{post2.user}</Post2Comment4>
                  <Post2Comment5>{post2.comment}</Post2Comment5>
                  <Post2Comment6>{post2.date}</Post2Comment6>
                </Post2Comment3>
              </Post2Comment1>
            </Post2Comment>
          ))}
          <Post2More>
            <Post2MoreBtn>더보기</Post2MoreBtn>
          </Post2More>
        </Post2>
        <Post3>
          <SimpleSlider />
        </Post3>
      </PostContainer>
    </>
  );
};

export default Post;
