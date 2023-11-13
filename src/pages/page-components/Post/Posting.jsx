
import gallery from "../../../images/image.png";
import video from "../../../images/video (1).png";
import location from "../../../images/placeholder.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";
import App from "./Editor";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../style-components/Global_style";
import {Posting1, Posting2, PostingContainer, Title, TitlePosting, PostingBottom, PostingBtn, PostingImg, ImgIcon, PostingVid, VidIcon, PostingLoc, LocIcon  } from "../../style-components/Post/Post-Posting";

const Posting = () => {


  return (
    <>
      <GlobalStyle />
      <PostingContainer>
        <Posting1>
          <PostingImg>
            <ImgIcon alt="사진 아이콘" src={gallery}></ImgIcon>
          </PostingImg>
          <PostingVid>
            <VidIcon alt="동영상 아이콘" src={video}></VidIcon>
          </PostingVid>
          <PostingLoc>
            <LocIcon alt="위치 아이콘" src={location}></LocIcon>
          </PostingLoc>
        </Posting1>
        <Posting2>
          <Title>게시판 글쓰기</Title>
          <TitlePosting placeholder="제목을 입력하세요"></TitlePosting>
          <div>
            <App></App>
          </div>
          <PostingBottom>
            <PostingBtn>등록</PostingBtn>
          </PostingBottom>
        </Posting2>
      </PostingContainer>
    </>
  );
};

export default Posting;
