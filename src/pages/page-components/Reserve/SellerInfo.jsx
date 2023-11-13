import { Info, InfoFlex, InfoTxt, InputBox } from "../../style_components/Reserve/Reserve-ClientSelloerInfo";
import { Container, Title } from "../../style_components/Reserve/Reserve-Common";


const ReserveSellerInfo = () => {
    return (
        <Container>
            <InputBox>
                <Title>판매자 정보</Title>
            
                <InfoFlex>
                    <InfoTxt>상호</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>대표자명</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>사업자번호</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>소재지</InfoTxt>
                    <Info></Info>
                </InfoFlex>
                <InfoFlex>
                    <InfoTxt>연락처</InfoTxt>
                    <Info></Info>
                </InfoFlex>
            </InputBox>
        </Container>
    )
}

export default ReserveSellerInfo;