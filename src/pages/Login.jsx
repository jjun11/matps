import React, { useEffect, useRef, useState } from "react";
import AxiosApi from "../api/AxiosApi";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Input, Items } from "../component/LoginComponent";
import matpsSymbol from "../images/matpsSymbol.png";
import Modal from "../util/Modal";

const Login = (page) => {
  const navigate = useNavigate(); // 화면 이동용 hook

  // ID / PW 입력, setInputId(Pw) 를 통해 inputId(Pw) 업데이트, 기본값은 ""
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 오류 메세지, setErrorId(Pw) 를 통해 setErrorId(Pw) 업데이트, 기본값은 ""
  const [errorId, setErrorId] = useState("");
  const [errorPw, setErrorPw] = useState("");

  // 유효성검사
  const [checkId, setCheckId] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const pageNm = page;

  // 팝업
  const [modalOpen, setModalOpen] = useState(false); // 모달 팝업 열기 아이디 유효성 검사결과를 출력할 팝업, 닫기 상태 기본값은 닫힘
  const closeModal = () => {
    // 모달 팝업 닫는 함수
    setModalOpen(false);
  };
  // 5~20 자리 영문자, 숫자, 언더스코어(_)로 이루어진 ID 검사
  const onChangeId = (e) => {
    const regexId = /^\w{5,40}$/; // 영문, 숫자, 언더스코어로만 이루어진 5~40 자 검사
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setErrorId("5자리 이상 40자리 미만 숫자, 영어로 입력해 주세요.");
      setCheckId(false);
    } else {
      setErrorId("");
      setCheckId(true);
    }
  };
  // 8~40자 비밀번호 검사 \x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E 는 특수문자 ASCII
  const onChangePw = (e) => {
    const regexPw =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{8,40}$/; // 영문, 숫자, 특수문자가 각각 하나 이상은 포함되었는 8 ~ 40자인지 검사
    setInputPw(e.target.value);
    if (!regexPw.test(e.target.value)) {
      setErrorPw(
        "숫자+영문+특수문자 조합으로 8자리 이상 40자리 미만으로 입력해 주세요."
      );
      setCheckPw(false);
    } else {
      setErrorPw("");
      setCheckPw(true);
    }
  };

  const onClickLogin = async () => {
    // 로그인을 위한  호출
    const res = await AxiosApi.memberLogin(inputId, inputPw); // 서버에 아이디와 패스워드를 보내 로그인을 시도하고 응답을 받음
    console.log(res.data); // 서버 응답을 콘솔에 출력

    if (res.data === true) {
      // 로그인 성공한 경우
      window.localStorage.setItem("userId", inputId); // 브라우저 로컬 스토리지에 아이디 저장
      window.localStorage.setItem("userPw", inputPw); // 브라우저 로컬 스토리지에 패스워드 저장
      window.localStorage.setItem("isLogin", "TRUE"); // 로그인 상태 저장

      if (page === "myPage") {
        navigate("/myPage"); // 마이페이지 버튼으로 로그인 후 성공한 경우 마이페이지로 이동
      } else if (page === "post") {
        navigate("/post"); // 글쓰기 버튼으로 로그인 후 성공한 경우 글쓰기로 이동
      } else if (page === "reserve") {
        navigate("/reserve"); // 예약 버튼으로 로그인 후 성공한 경우 예약으로 이동
      } else {
        navigate("/Layout");
      }
    } else {
      setModalOpen(true); // 로그인 실패 시 모달 팝업 열기
    }
  };

  return (
    <Container>
      <Items className="item1">
        <img src={matpsSymbol} alt="Logo" style={{ width: '300px'}}/> {/* 로고 이미지 표시 */}
      </Items>

      <Items className="item2">
        <Input placeholder="아이디" value={inputId} onChange={onChangeId} />{" "}
        {/* 아이디 입력 필드 */}
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`${checkId ? "success" : "error"}`}>{errorId}</span>
        )}
      </Items>

      <Items className="item2">
        <Input placeholder="패스워드" value={inputPw} onChange={onChangePw} />{" "}
        {/* 패스워드 입력 필드 */}
      </Items>
      <Items className="hint">
        {inputPw.length > 0 && (
          <span className={`${checkPw ? "success" : "error"}`}>{errorPw}</span>
        )}
      </Items>
      <Items className="item2">
        {checkId && checkPw ? ( // 아이디와 패스워드가 유효한 경우 버튼 활성화
          <Button enabled onClick={onClickLogin}>
            로그인
          </Button>
        ) : (
          <Button disabled>로그인</Button> // 아이디 또는 패스워드가 유효하지 않으면 버튼 비활성화
        )}
      </Items>
      <Modal open={modalOpen} close={closeModal} header="오류">
        아이디 및 패스워드를 재확인해 주세요.{" "}
        {/* 로그인 실패 시 모달 팝업 내용 */}
      </Modal>
      <Items className="btm">
        <Link to="/Signup" className="link_style">
          <span>아이디 찾기</span>
          <span>  |  </span>
          <span>비밀번호 찾기</span>
          <span>  |  </span>
          <span>회원가입</span>
        </Link>
      </Items>
    </Container>
  );
};

export default Login;
