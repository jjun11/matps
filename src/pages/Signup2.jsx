import { useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import AxiosApi from "../api/AxiosApi";
import {
  Container,
  Items,
  Input,
  Button,
  Label,
} from "../component/SignupComponent2";
import { useState } from "react";
import matpslogo from "../images/matps로고.png";

const Signup2 = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNick, setInputNick] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [mailMessage, setMailMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNick, setIsNick] = useState(false);
  const [isMail, setIsMail] = useState(false);
  // 팝업
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModelText] = useState("중복된 아이디 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChangeId = (e) => {
    setInputId(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 40) {
      setIdMessage("5자리 이상 40자리 미만으로 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.");
      setIsId(true);
    }
  };
  const onChangePw = (e) => {
    //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{8,40}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage(
        "숫자+영문+특수문자 조합으로 8자리 이상 40자리 미만으로 입력해 주세요."
      );
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요.");
      setIsPw(true);
    }

    if (passwordCurrent !== inputConPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다.");
      setIsConPw(true);
    }
  };
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다. )");
      setIsConPw(true);
    }
  };
  const onChangeName = (e) => {
    setInputName(e.target.value);
    setIsName(true);
  };
  const onChangeNick = (e) => {
    setInputNick(e.target.value);
    setIsNick(true);
  };
  const onChangeMail = (e) => {
    setInputEmail(e.target.value);
    setIsMail(true);
  };

  const onClickLogin = async () => {
    console.log("Click 회원가입");
    // 가입 여부 우선 확인
    const memberCheck = await AxiosApi.memberRegCheck(inputId);
    console.log("가입 가능 여부 확인 : ", memberCheck.data);
    // 가입 여부 확인 후 가입 절차 진행

    if (memberCheck.data.result === "OK") {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      const memberReg = await AxiosApi.memberReg(
        inputId,
        inputPw,
        inputName,
        inputNick,
        inputEmail
      );
      console.log(memberReg.data.result);
      if (memberReg.data.result === "OK") {
        navigate("/");
      } else {
        setModalOpen(true);
        setModelText("회원 가입에 실패 했습니다.");
      }
    } else {
      console.log("이미 가입된 회원 입니다.");
      setModalOpen(true);
      setModelText("이미 가입된 회원 입니다.");
    }
  };
  return (
    <>
      <Container>
        <Items className="sign">회원가입</Items>
        <hr style={{ width: "100%" }} />
        <Items className="logo">
          <img src={matpslogo} alt="Logo" style={{ width: "7.5rem" }} />{" "}
          {/* 로고 이미지 표시 */}
        </Items>
        <Items className="item2">
          <Items className="inputline">
            <Label>아이디</Label>
            <Input placeholder="아이디" value={inputId} onChange={onChangeId} />
          </Items>
          <Items className="inputline">
            <Label>비밀번호</Label>
            <Input
              type="password"
              placeholder="비밀번호"
              value={inputPw}
              onChange={onChangePw}
            />
          </Items>
          <Items className="hint">
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
    </>
  );
};

export default Signup2;
