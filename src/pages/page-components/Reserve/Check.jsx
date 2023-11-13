import { CheckFlex, CheckResult, CheckTxt } from "../../style_components/Reserve/Reserve-Check";
import { Container, Title } from "../../style_components/Reserve/Reserve-Common";

const ReserveCheck = () => {
    return(
        <Container>
            <Title>예약 확인</Title>
            <CheckFlex>
                <CheckTxt>일정</CheckTxt>
                <CheckResult>11.01(수), 오후 8:00시</CheckResult>
            </CheckFlex>
            <CheckFlex>
                <CheckTxt>인원</CheckTxt>
                <CheckResult>성인 2</CheckResult>
            </CheckFlex>
        </Container>
    );
};

export default ReserveCheck;
