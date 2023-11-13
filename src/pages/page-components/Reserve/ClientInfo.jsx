import { CheckTxt } from "../../style_components/Reserve/Reserve-Check";
import { InputBox ,InfoFlex, Info, InfoTxt } from "../../style_components/Reserve/Reserve-ClientSelloerInfo";
import { Container, Title } from "../../style_components/Reserve/Reserve-Common";


const ReserveClientInfo = () => {
    return (
        <Container>
            <InputBox>
                <Title>예약자 정보</Title>
            
                <InfoFlex>
                    <InfoTxt>예약자명</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>연락처</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>이메일</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>요청사항</InfoTxt>
                    <Info></Info>
                </InfoFlex>
            </InputBox>
            
        </Container>
    );
};

export default ReserveClientInfo;