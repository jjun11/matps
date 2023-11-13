import {FormContainer, FieldContainer, StyledLabel, Title, StyledInput, StyledTextarea, SubmitButton, ButtonContainer, UserImage, UploadButton, FileUploadContainer } from '../../style-components/Store/Store-ReviewWrite';
import { useState, useNavigate, AxiosApi, storage } from 'react';


const ReviewWrite = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const userId = window.localStorage.getItem("userId");
    console.log("userId : " + userId);
    const navigate = useNavigate();
  
    // const handleTitleChange = (e) => {
    //   setTitle(e.target.value);
    // };
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleSubmit = async () => {
      console.log(title, content, userId, url);
      try {
        const rsp = await AxiosApi.boardWrite(title, content, userId, url);
        if (rsp.data === true) {
          alert("글쓰기 성공");
          navigate("/Review");
        } else {
          alert("글쓰기 실패");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const handleReset = () => {
      setTitle("");
      setContent("");
      navigate("/Review");
    };
  
    const handleFileInputChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUploadClick = async () => {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
  
        // 파일을 업로드하고 기다립니다.
        await fileRef.put(file);
        console.log("File uploaded successfully!");
  
        // 다운로드 URL을 가져오고 기다립니다.
        const url = await fileRef.getDownloadURL();
        console.log("저장경로 확인 : " + url);
  
        // 상태를 업데이트합니다.
        setUrl(url);
      } catch (error) {
        // 에러를 처리합니다.
        console.error("Upload failed", error);
      }
    };
  

    return (
        <FormContainer>
            <Title>리뷰 작성</Title>
            {/* <FieldContainer>
                <StyledLabel htmlFor="title">제목</StyledLabel>
                <StyledInput
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
                />
            </FieldContainer> */}
            <FieldContainer>
                <StyledLabel htmlFor="content">내용</StyledLabel>
                <StyledTextarea
                id="content"
                name="content"
                value={content}
                onChange={handleContentChange}
                />
            </FieldContainer>

            <FileUploadContainer>
                <StyledInput type="file" onChange={handleFileInputChange} />
                <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
            </FileUploadContainer>

            {url && <UserImage src={url} alt="uploaded" />}

            <ButtonContainer>
                <SubmitButton onClick={handleSubmit}>글쓰기</SubmitButton>
                <SubmitButton onClick={handleReset}>취소</SubmitButton>
            </ButtonContainer>
        </FormContainer>
    );
}

export default ReviewWrite;