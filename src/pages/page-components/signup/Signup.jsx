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
const setIdMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const navigate = useNavigate(); // 화면 간 이동을 가능케 하는 useNavigate 훅을 사용

  // 키보드 입력
  const [inputId, setInputId] = useState(""); // 아이디 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputPw, setInputPw] = useState(""); // 비밀번호 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputConPw, setInputConPw] = useState(""); // 비밀번호 확인 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputName, setInputName] = useState(""); // 이름 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputNick, setInputNick] = useState(""); // 닉네임 입력값을 담는 상태와 그 상태를 업데이트하는 함수
  const [inputMail, setInputMail] = useState(""); // 이메일 입력값을 담는 상태와 그 상태를 업데이트하는 함수

  // 오류 메시지
  const [idMessage, setIdMessage] = useState(""); // 아이디 관련 오류 메시지를 표시하는 상태
  const [pwMessage, setPwMessage] = useState(""); // 비밀번호 관련 오류 메시지를 표시하는 상태
  const [conPwMessage, setConPwMessage] = useState(""); // 비밀번호 확인 관련 오류 메시지를 표시하는 상태
  const [nickMessage, setNickMessage] = useState(""); // 비밀번호 확인 관련 오류 메시지를 표시하는 상태
  const [mailMessage, setMailMessage] = useState(""); // 이메일 관련 오류 메시지를 표시하는 상태

  // 유효성 검사
  const [isId, setIsId] = useState(false); // 아이디 유효성 검사 상태
  const [isPw, setIsPw] = useState(false); // 비밀번호 유효성 검사 상태
  const [isConPw, setIsConPw] = useState(false); // 비밀번호 확인 유효성 검사  상태
  const [isName, setIsName] = useState(false); // 이름 유효성 검사 상태
  const [isNick, setIsNick] = useState(false); // 닉네임 유효성 검사 상태
  const [isMail, setIsMail] = useState(false); // 이메일 유효성 검사  상태
  const [isGender, setIsGender] = useState(false); // 이메일 유효성 검사 상태
  const [inputGender, setGender] = useState(false); // 성별 유효성 검사
  const [termsAgreed, setTermsAgreed] = useState(false); // 이용약관 동의상태
  const [privacyAgreed, setPrivacyAgreed] = useState(false); // 개인정보처리방침 동의상태
  
  const [allAgreed, setAllAgreed] = useState(false); // 약관 모두동의 상태

  useEffect(() => {
    setAllAgreed(termsAgreed && privacyAgreed);
  }, [termsAgreed, privacyAgreed]);

  const handleAllAgreedChange = () => {
    const newAllAgreed = !allAgreed;
    setAllAgreed(newAllAgreed);
    setTermsAgreed(newAllAgreed);
    setPrivacyAgreed(newAllAgreed);
  };

  // 팝업
  const [modalOpen, setModalOpen] = useState(false); // 팝업 모달의 열림/닫힘 상태를 나타내는 상태
  const [modalText, setModelText] = useState("중복된 아이디 입니다."); // 팝업 모달에 표시될 텍스트



  const closeModal = () => {
    setModalOpen(false); // 팝업 모달을 닫는 함수
  };

  // ID 입력 필드에서 포커스가 벗어났을 때 중복 확인
  const checkDuplicateId = async () => {
    // 중복확인 함수
    if (inputId.length > 0) {
      // 입력된 아이디가 있을 때
      const resultId = await AxiosApi.memberRegCheckId(inputId); // AxiosApi의 memberRegCheckId 함수를 통해 서버로 아이디 중복확인 요청
      console.log(resultId.data);
      if (resultId.data === true) {
        // 서버로부터 받은 응답이 "true"인 경우
        setIdMessage("사용 가능한 아이디입니다.");
        setIsId(true); // 아이디 유효성 검사 결과 설정 (유효함)
      } else {
        // 서버로부터 받은 응답이 "ture"가 아닌 경우
        setIdMessage("이미 사용 중인 아이디입니다.");
        setIsId(false); // 아이디 유효성 검사 결과 설정 (유효하지 않음)
      }
    }
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

  const onChangeId = (e) => {
    setInputId(e.target.value); // 아이디 입력값 업데이트
    if (e.target.value.length < 5 || e.target.value.length > 20) {
      setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요."); // 아이디 유효성 검사 오류 메시지 설정
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
    setInputMail(e.target.value); // 이메일 입력값 업데이트
    setIsMail(true); // 이메일 유효성 검사 결과 설정 (유효함)
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value); // 라디오 버튼 변경 시 성별 상태 업데이트
    setIsGender(true); // 성별 유효성 검사 결과 설정 (유효함)
  };

  const onClickSign = async () => {
    // 회원가입 버튼 클릭 시 수행되는 함수
    console.log("Click 회원가입"); // 회원가입 버튼이 클릭되었음을 콘솔에 "Click 회원가입" 메시지로 출력

    const memberReg = await AxiosApi.memberReg(
      // 회원정보를 서버로 보내는 AxiosApi
      inputId, // id 정보 추가
      inputPw, // pw 정보 추가
      inputName, // 이름 정보 추가
      inputNick, // 닉네임 정보 추가
      inputMail, // 이메일 정보 추가
      inputGender // 성별 정보 추가
    );
    console.log(inputId, inputPw, inputName, inputNick, inputMail, inputGender); // 회원정보를 콘솔에 출력
    console.log(memberReg.data); // 회원가입 결과 출력
    // 회원가입 수행

    if (memberReg.data === true) {
      navigate("/Login"); // 회원 가입이 성공한 경우 로그인 화면으로 이동
    } else {
      setModalOpen(true); // 회원 가입에 실패한 경우 모달 팝업을  열고 오류 메시지를 설정
      setModelText("회원 가입에 실패 했습니다."); // 모달 팝업에 표시할 텍스트
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
          <Input
            placeholder="아이디"
            value={inputId}
            onChange={onChangeId}
            onBlur={checkDuplicateId}
          />
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
            type="Mail"
            placeholder="이메일"
            value={inputMail}
            onChange={onChangeMail}
          />
        </Items>
        <Items className="inputline">
          <Label>성별</Label>
          <RadioContainer>
            <RadioLabel>
              남자
              <RadioInput
                type="radio"
                name="gender"
                value="male"
                checked={inputGender === "male"}
                onChange={handleGenderChange}
              />
            </RadioLabel>
            <RadioLabel>
              여자
              <RadioInput
                type="radio"
                name="gender"
                value="female"
                checked={inputGender === "female"}
                onChange={handleGenderChange}
              />
            </RadioLabel>
          </RadioContainer>
        </Items>
      </Items>
      <Items className="agree">
        <span id="allagreed">모두 동의</span>
        <Input
          className="agree"
          type="checkbox"
          id="allAgreeCheckbox"
          checked={allAgreed}
          onChange={handleAllAgreedChange}
        />
        <span>이용약관 동의</span>
        <Input
          className="agree"
          type="checkbox"
          id="termsCheckbox"
          checked={termsAgreed}
          onChange={() => setTermsAgreed(!termsAgreed)}
        />
        <button onClick={() => window.open("/TermsOfUse", "_blank")}>
          약관보기
        </button>
        <span>개인정보 처리방침 동의</span>
        <Input
          className="agree"
          type="checkbox"
          id="privacyCheckbox"
          checked={privacyAgreed}
          onChange={() => setPrivacyAgreed(!privacyAgreed)}
        />
        <button onClick={() => window.open("/PrivacyPolicy", "_blank")}>
          약관보기
        </button>
      </Items>
      <Items className="item2">
        {isId &&
        isPw &&
        isConPw &&
        isName &&
        isNick &&
        isMail &&
        isGender &&
        termsAgreed & privacyAgreed ? ( // 모든 입력 필드가 유효한 경우 회원가입 버튼 활성화
          <Button enabled onClick={onClickSign}>
            가입하기
          </Button>
        ) : (
          <Button disabled>정보미입력</Button> // 회원가입 버튼 비활성화
        )}
        <Modal open={modalOpen} close={closeModal} header="오류">
          {modalText}
        </Modal>
      </Items>
    </Container>
  );
};

export default Signup;
