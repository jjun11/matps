import { Container, Items, Input, Label, Button } from "../component/FindIdComponent";
import { useState } from "react";

const FindId = () => {

    const [inputName, setInputName] = useState("")
    const [inputMail, setInputMail] = useState("");

    const onChangeName = (e) => {
        setInputName(e.target.value);
      };
      const onChangeMail = (e) => {
        setInputMail(e.target.value);
      };

    return (
        <>
        <Container>
        <Items className="FindId">아이디 찾기</Items>
        <hr style={{ width: "100%" }} />
        <Items className="title">
                본인확인 이메일 인증
            </Items>
            <Items className="inputline">
            <Label>이름</Label>
            <Input placeholder="이름" value={inputName} onChange={onChangeName} />
          </Items>
          <Items className="inputline">
            <Label>이메일 주소</Label>
            <Input placeholder="이메일" value={inputMail} onChange={onChangeMail} />
            <Button>인증번호 받기</Button>
          </Items>
            <Items>
                
            </Items>
        </Container>
        </>
    );
};

export default FindId;