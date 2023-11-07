import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅을 불러옴
import Modal from "../util/Modal"; // Modal 컴포넌트를 불러옴
import AxiosApi from "../api/AxiosApi"; // Axios를 통해 서버로 HTTP 요청을 보내는 API를 불러옴
import {
  Container,
  Items,
  Input,
  Button,
  Label,
} from "../component/SignupComponent2"; // SignupComponent2 컴포넌트에서 필요한 요소들을 불러옴
import { useState } from "react"; // React의 useState 훅을 불러옴
import matpslogo from "../images/matps로고.png"; // matps로고 이미지 파일을 불러옴

const Signup2 = () => {
  const navigate = useNavigate(); // 화면 간 이동을 가능케 하는 useNavigate 훅을 사용

  // 키보드 입력
  const [inputId, setInputId] = useState(""); // 아이디 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputPw, setInputPw] = useState(""); // 비밀번호 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputConPw, setInputConPw] = useState(""); // 비밀번호 확인 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputName, setInputName] = useState(""); // 이름 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputNick, setInputNick] = useState(""); // 닉네임 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputEmail, setInputEmail] = useState(""); // 이메일 입력값을 담는 상태와 그 상태를 업데이트하는 함수

  // 오류 메시지
  const [idMessage, setIdMessage] = useState(""); // 아이디 관련 오류 메시지를 표시하는 상태
  const [pwMessage, setPwMessage] = useState(""); // 비밀번호 관련 오류 메시지를 표시하는 상태
  const [conPwMessage, setConPwMessage] = useState(""); // 비밀번호 확인 관련 오류 메시지를 표시하는 상태
  const [mailMessage, setMailMessage] = useState(""); // 이메일 관련 오류 메시지를 표시하는 상태

  // 유효성 검사
  const [isId, setIsId] = useState(false); // 아이디 유효성 검사 결과를 나타내는 상태
  const [isPw, setIsPw] = useState(false); // 비밀번호 유효성 검사 결과를 나타내는 상태
  const [isConPw, setIsConPw] = useState(false); // 비밀번호 확인 유효성 검사 결과를 나타내는 상태
  const [isName, setIsName] = useState(false); // 이름 유효성 검사 결과를 나타내는 상태
  const [isNick, setIsNick] = useState(false); // 닉네임 유효성 검사 결과를 나타내는 상태
  const [isMail, setIsMail] = useState(false); // 이메일 유효성 검사 결과를 나타내는 상태

  // 팝업
  const [modalOpen, setModalOpen] = useState(false); // 팝업 모달의 열림/닫힘 상태를 나타내는 상태
  const [modalText, setModelText] = useState("중복된 아이디 입니다."); // 팝업 모달에 표시될 텍스트

  const closeModal = () => {
    setModalOpen(false); // 팝업 모달을 닫는 함수
  };

  const onChangeId = (e) => {
    setInputId(e.target.value); // 아이디 입력값 업데이트
    if (e.target.value.length < 5 || e.target.value.length > 40) {
      setIdMessage("5자리 이상 40자리 미만으로 입력해 주세요."); // 아이디 유효성 검사 오류 메시지 설정
      setIsId(false); // 아이디 유효성 검사 결과 설정 (유효하지 않음)
    } else {
      setIdMessage("올바른 형식 입니다."); // 아이디 유효성 검사 통과 메시지 설정
      setIsId(true); // 아이디 유효성 검사 결과 설정 (유효함)
    }
  };

  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{8,40}$/; // 안전한 비밀번호를 나타내는 정규식
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent); // 비밀번호 입력값 업데이트
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage(
        "숫자+영문+특수문자 조합으로 8자리 이상 40자리 미만으로 입력해 주세요."
      ); // 비밀번호 유효성 검사 오류 메시지 설정
      setIsPw(false); // 비밀번호 유효성 검사 결과 설정 (유효하지 않음)
    } else {
      setPwMessage("안전한 비밀번호에요."); // 비밀번호 유효성 검사 통과 메시지 설정
      setIsPw(true); // 비밀번호 유효성 검사 결과 설정 (유효함)
    }

    if (passwordCurrent !== inputConPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다."); // 비밀번호 확인 유효성 검사 오류 메시지 설정
      setIsConPw(false); // 비밀번호 확인 유효성 검사 결과 설정 (유효하지 않음)
    } else {
      setConPwMessage("비밀 번호가 일치 합니다."); // 비밀번호 확인 유효성 검사 통과 메시지 설정
      setIsConPw(true); // 비밀번호 확인 유효성 검사 결과 설정 (유효함)
    }
  };

  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent); // 비밀번호 확인 입력값 업데이트
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다."); // 비밀번호 확인 유효성 검사 오류 메시지 설정
      setIsConPw(false); // 비밀번호 확인 유효성 검사 결과 설정 (유효하지 않음)
    } else {
      setConPwMessage("비밀 번호가 일치 합니다. )"); // 비밀번호 확인 유효성 검사 통과 메시지 설정
      setIsConPw(true); // 비밀번호 확인 유효성 검사 결과 설정 (유효함)
    }
  };

  const onChangeName = (e) => {
    setInputName(e.target.value); // 이름 입력값 업데이트
    setIsName(true); // 이름 유효성 검사 결과 설정 (유효함)
  };

  const onChangeNick = (e) => {
    setInputNick(e.target.value); // 닉네임 입력값 업데이트
    setIsNick(true); // 닉네임 유효성 검사 결과 설정 (유효함)
  };

  const onChangeMail = (e) => {
    setInputEmail(e.target.value); // 이메일 입력값 업데이트
    setIsMail(true); // 이메일 유효성 검사 결과 설정 (유효함)
  };

  const onClickLogin = async () => {
    console.log("Click 회원가입");

    // 가입 여부 우선 확인
    const memberCheck = await AxiosApi.memberRegCheck(inputId);
    console.log("가입 가능 여부 확인 : ", memberCheck.data);

    // 가입 여부 확인 후 가입 절차 진행
    if (memberCheck.data.result === "OK") {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");

      // 닉네임 중복 확인 추가
    const nickCheck = await AxiosApi.memberRegCheck(inputNick);
    console.log("닉네임 중복 확인: ", nickCheck.data);

    if (nickCheck.data.result === "OK") {
      console.log("사용 가능한 닉네임입니다. 가입을 진행합니다.");

      const memberReg = await AxiosApi.memberReg(
        inputId,
        inputPw,
        inputName,
        inputNick,
        inputEmail
      );
      console.log(memberReg.data.result);
      // 회원가입 수행

      if (memberReg.data.result === "OK") {
        navigate("/"); // 회원 가입이 성공한 경우 홈 화면으로 이동
      } else {
        setModalOpen(true); // 회원 가입에 실패한 경우 모달 팝업을  열고 오류 메시지를 설정
        setModelText("회원 가입에 실패 했습니다."); // 모달 팝업에 표시할 텍스트
      }
    } else {
      console.log("이미 사용 중인 닉네임입니다.");
      setModalOpen(true); // 이미 사용 중인 닉네임인 경우 모달 팝업을 열고 오류 메시지를 설정
      setModelText("이미 사용 중인 닉네임입니다."); // 모달 팝업에 표시할 텍스트 설정
    }
    } else {
      console.log("이미 가입된 아이디 입니다.");
      setModalOpen(true);  // 이미 가입된 회원인 경우 모달 팝업을 열고 오류 메시지를 설정
      setModelText("이미 가입된 아이디 입니다."); // 모달 팝업에 표시할 텍스트 설정
    }
  };

  return (
    <Container>
      <Items className="sign">회원가입</Items>
      <hr style={{ width: "100%" }} /> {/*전체너비 수평선*/}
      <Items className="logo">
        <img src={matpslogo} alt="Logo" style={{ width: "7.5rem" }} />{" "}
        {/* 로고 이미지 표시 */}
      </Items>
      <Items className="item2">
        <Items className="inputline">
          <Label>아이디</Label>
          {/* 아이디 입력필드 */}
          <Input placeholder="아이디" value={inputId} onChange={onChangeId} />
        </Items>
        <Items className="hint">
          {inputId.length > 0 && (
            <span className={`message ${isId ? "success" : "error"}`}>
              {idMessage}
            </span>
          )}
          </Items>
        <Items className="inputline">
          <Label>비밀번호</Label>
          {/* 비밀번호 입력필드 */}
          <Input
            type="password"
            placeholder="비밀번호"
            value={inputPw}
            onChange={onChangePw}
          />
        </Items>
        <Items className="hint">
          {/* 비밀번호 힌트 발생처, 비밀번호 입력란에 내용이 있을 때,  */}
          {inputPw.length > 0 && (
            <span className={`message ${isPw ? "success" : "error"}`}>
              {pwMessage}
            </span>
          )}
        </Items>
        <Items className="inputline">
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="패스워드 확인"
            value={inputConPw}
            onChange={onChangeConPw}
          />
        </Items>
        <Items className="hint">
          {inputPw.length > 0 && (
            <span className={`message ${isConPw ? "success" : "error"}`}>
              {conPwMessage}
            </span>
          )}
        </Items>
        <Items className="inputline">
          <Label>이름</Label>
          <Input
            type="text"
            placeholder="이름"
            value={inputName}
            onChange={onChangeName}
          />
        </Items>
        <Items className="inputline">
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임"
            value={inputNick}
            onChange={onChangeNick}
          />
        </Items>
        <Items className="inputline">
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="이메일"
            value={inputEmail}
            onChange={onChangeMail}
          />
        </Items>
      </Items>
    </Container>
  );
};

export default Signup2;
