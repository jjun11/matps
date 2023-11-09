import {
  Container,
  Items,
  Input,
  Label,
  Button,
} from "../../component/signup/FindIdComponent";
import { useState } from "react";

const FindPw = () => {
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputCode, setInputCode] = useState("");

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };
  const onChangeMail = (e) => {
    setInputMail(e.target.value);
  };
  const onChangeCode = (e) => {
    setInputCode(e.target.value);
  };

  return (
    <>
      <Container>
        <Items className="FindId">비밀번호 찾기</Items>
        <hr style={{ width: "100%" }} />
        <Items className="title">본인확인 이메일 인증</Items>
        <Items className="inputline">
          <Label>이름</Label>
          <Input placeholder="이름" value={inputName} onChange={onChangeName} />
        </Items>
        <Items className="inputline">
          <Label>이메일 주소</Label>
          <Input
            placeholder="이메일"
            value={inputMail}
            onChange={onChangeMail}
          />
          <Button>인증번호 받기</Button>
        </Items>
        <Items className="inputline">
          <Label></Label>
          <Input
            placeholder="인증번호 입력"
            value={inputCode}
            onChange={onChangeCode}
          />
        </Items>
        <Items className="link">
          <div>인증번호가 오지 않아요</div>
          <div>비밀번호 찾기</div>
        </Items>
      </Container>
    </>
  );
};

export default FindPw;
