import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅을 불러옴
import Modal from "../../../util/Modal"; // Modal 컴포넌트를 불러옴
import AxiosApi from "../../../Api/AxiosApi"; // Axios를 통해 서버로 HTTP 요청을 보내는 API를 불러옴
import {
  Container,
  Items,
  Input,
  Button,
  Label,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "../../style-components/signup/SignupComponent"; // SignupComponent2 컴포넌트에서 필요한 요소들을 불러옴
import { useEffect, useState } from "react"; // React의 useState 훅을 불러옴
import matpslogo from "../../../images/matps로고.png"; // matps로고 이미지 파일을 불러옴
import styled from "styled-components";
import { storage } from "../../../Api/firebase";

const setIdMessage = styled.div`
  color: red;
`;

const Update = () => {
  const navigate = useNavigate(); // 화면 간 이동을 가능케 하는 useNavigate 훅을 사용
  var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

  // 키보드 입력
  const [inputId, setInputId] = useState(""); // 아이디 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputNick, setInputNick] = useState(userInfo.my_nickname); // 닉네임 입력값을 담는 상태와 그 상태를 업데이트하는 함수

  const [file, setFile] = useState(''); // 프로필이미지 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [url, setUrl] = useState(userInfo.my_profile_img);

  // 오류 메시지
  const [nickMessage, setNickMessage] = useState(""); // 닉네임 관련 오류 메시지를 표시하는 상태

  // 유효성 검사
  const [isNick, setIsNick] = useState(true); // 닉네임 유효성 검사 상태

  // 팝업
  const [modalOpen, setModalOpen] = useState(false); // 팝업 모달의 열림/닫힘 상태를 나타내는 상태
  const [modalText, setModelText] = useState("중복된 아이디 입니다."); // 팝업 모달에 표시될 텍스트

  const closeModal = () => {
    setModalOpen(false); // 팝업 모달을 닫는 함수
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('File uploaded successfully!');
      fileRef.getDownloadURL().then((url) => {
        console.log("저장경로 확인 : " + url);
        setUrl(url);
      });
    });
  };

  // 닉네임 입력 필드에서 포커스가 벗어났을 때 중복 확인
  const checkDuplicateNick = async () => {
    
    if (inputNick.length > 0) {
      const resultNick = await AxiosApi.memberRegCheckNick(inputNick);
      console.log(resultNick.data);
      if (resultNick.data === true) {
        // 서버로부터 받은 응답이 "true"인 경우
        setNickMessage("사용 가능한 닉네임입니다.");
        setIsNick(true); // 닉네임 유효성 검사 결과 설정 (유효함)
      } else {
        // 서버로부터 받은 응답이 "ture"가 아닌 경우
        setNickMessage("이미 사용 중인 닉네임입니다.");
        setIsNick(false); // 닉네임 유효성 검사 결과 설정 (유효하지 않음)
      }
    }
  };

  const onChangeNick = (e) => {
    setInputNick(e.target.value); // 닉네임 입력값 업데이트
    setIsNick(true); // 닉네임 유효성 검사 결과 설정 (유효함)
  };

  const onChangeImg = (e) => {
    setFile(e.target.value); // 프로필이미지 입력값 업데이트
  };


  
  const onClickUpdate = async () => {
    // 내정보수정 버튼 클릭 시 수행되는 함수
    console.log("Click 회원정보수정"); // 정보수정 버튼이 클릭되었음을 콘솔에 "Click 회원가입" 메시지로 출력

    const memberUpd = await AxiosApi.memberUpd(
      // 회원정보를 서버로 보내는 AxiosApi
      userInfo.my_id,
      inputNick, // 닉네임 정보 추가
      url
    );
    console.log(memberUpd.data); // 회원정보수정 결과 출력
    // 정보수정 수행
    if (memberUpd.data === true) {
      const res2 = await AxiosApi.memberGet(userInfo.my_id); // 회원정보 가져오기

      window.localStorage.setItem("userInfo", JSON.stringify(res2.data[0])); // 브라우저 로컬 스토리지에 유저 정보 저장

      navigate("/MyPage"); // 회원 정보수정이 성공한 경우 로그인 화면으로 이동
    } else {
      setModalOpen(true); // 정보 수정에 실패한 경우 모달 팝업을  열고 오류 메시지를 설정
      setModelText("내정보 수정에 실패 했습니다."); // 모달 팝업에 표시할 텍스트
    }
  };

  return (
    <Container>
      <Items className="sign">회원정보 수정</Items>
      <hr style={{ width: "100%" }} /> {/*전체너비 수평선*/}
      <Items
        className="logo"
        style={{
          width: "13.25rem",
          height: "13.25rem",
          borderRadius: "50%",
          overflow: "hidden",
          border: "1rem solid #d94d4d99",
        }}
      >
        <img
          src={url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </Items>
      <Items className="item2">
        <Items className="inputimg">
          <Label>프로필 이미지</Label>
          <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>사진 적용</button>
        </Items>
        <Items className="deleteimg">
          <Label>프로필 이미지</Label>
      <button onClick={handleUploadClick}>사진 삭제</button>
        </Items>
        <Items className="inputline">
          <Label>아이디</Label>
          {/* 아이디 입력필드 */}
          <Input
            style={{ backgroundColor: "darkgrey" }}
            value={userInfo.my_id}
            disabled="false"
          />
        </Items>
        <Items className="inputline">
          <Label>이름</Label>
          <Input
            style={{ backgroundColor: "darkgrey" }}
            value={userInfo.my_name}
            type="text"
            placeholder="이름"
            disabled="false"
          />
        </Items>
        <Items className="inputline">
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder={userInfo.my_nickname}
            value={inputNick}
            onChange={onChangeNick}
            onBlur={checkDuplicateNick}
          />
        </Items>
        <Items className="hint">
          {inputNick.length > 0 && (
            <span className={`message ${isNick ? "success" : "error"}`}>
              {nickMessage}
            </span>
          )}
        </Items>
        <Items className="inputline">
          <Label>이메일</Label>
          <Input
            style={{ backgroundColor: "darkgrey" }}
            type="Mail"
            placeholder="이메일"
            value={userInfo.my_email}
            disabled="false"
          />
        </Items>
      </Items>
      <Items className="item2">
        {isNick ? ( // 닉네임 중복확인 유효한 경우 회원가입 버튼 활성화
          <Button enabled onClick={onClickUpdate}>
            변경하기
          </Button>
        ) : (
          <Button disabled>변경불가</Button> // 회원정보수정 버튼 비활성화
        )}
        <Modal open={modalOpen} close={closeModal} header="오류">
          {modalText}
        </Modal>
      </Items>
    </Container>
  );
};

export default Update;
