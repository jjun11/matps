import checkIcon from "../../../images/check.png";
import {Container, ConInner, AgreeBox, AgreeTitleBox, AgreeTxt, Check, CheckTitle, ScrollBox, Alert, Button} from "../../style_components/Reserve/Reserve-BookingAgree";

const ReserveBookingAgree = () => {
    return (
        <Container>
            <ConInner>
                <AgreeTitleBox>
                    <CheckTitle>개인정보 수집에 대한 동의</CheckTitle>
                    <Check src={checkIcon} alt="checkIcon"></Check>
                </AgreeTitleBox>
                <ScrollBox>
                    <AgreeBox>
                        <AgreeTxt className="AgreeBox">
                            
                            &lt;개인정보 수집 동의 &gt;<br/><br/>

                            1. 기본수집항목: [필수] 이름, (휴대)전화번호, [선택] 이메일 주소<br/>
                            ※ 추가 수집하는 필수항목<br/>
                            - 배송, 방문 등이 필요한 상품 구매 시 : 주소<br/>
                            - 해외 여행 관련 상품 구매 시 : 여권상 영문명, 여권번호 끝 4자리, 성별, 생년월일, 이메일주소, 카카오톡ID, 동행 아동정보(여권상 영문명, 생년월일, 신장)<br/>
                            - 병원을 이용하는 경우: 생년월일 (병원 재진 시 이전 진료기록 조회를 위해 예약자명, 생년월일, 전화번호가 수집될 수 있습니다.)<br/><br/>

                            2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존<br/><br/>

                            3. 보관기간<br/>
                            - 회원탈퇴 시 지체없이 파기<br/>
                            - 단, 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함<br/><br/>

                            4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다. 그 밖의 내용은 네이버 개인정보 처리방침을 따릅니다.<br/>
                            
                        </AgreeTxt>
                    </AgreeBox>
                </ScrollBox>
            </ConInner>
            <ConInner>
                <AgreeTitleBox>
                    <CheckTitle>개인정보 제공에 대한 동의</CheckTitle>
                    <Check src={checkIcon} alt="checkIcon"></Check>
                </AgreeTitleBox>
                <ScrollBox>
                    <AgreeBox>
                        <AgreeTxt className="AgreeBox">

                            &lt;개인정보 제공 동의&gt;<br/><br/>

                            1. 개인정보를 제공받는 자 : 주식회사 더양심<br/><br/>

                            2. 제공하는 기본 개인정보 항목:  [필수] 마스킹 처리된 아이디, 이름, (휴대)전화번호, 성별, 연령대, [선택] 이메일 주소<br/>
                            ※ 추가 제공하는 필수항목<br/>
                            - 배송, 방문 등이 필요한 상품 구매 시 : 주소<br/>
                            - 해외 여행 관련 상품 구매 시 : 여권상 영문명, 여권번호 끝 4자리, 생년월일, 이메일주소, 카카오톡ID, 동행 아동정보(여권상 영문명, 생년월일, 신장)<br/>
                            - 병원을 이용하는 경우: 생년월일 (병원 재진 시 이전 진료기록 조회를 위해 예약자명, 생년월일, 전화번호가 수집될 수 있습니다.)<br/><br/>

                            3. 개인정보를 제공받는 자의 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 서비스 분석과 통계에 따른 혜택 및 맞춤 서비스 제공, 민원처리 등 고객상담, 고객관리, 서비스 이용에 따른 설문조사 및 혜택 제공, 분쟁조정을 위한 기록보존<br/><br/>

                            4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 네이버 회원탈퇴 시 또는 위 개인정보 이용목적 달성 시 까지 이용합니다.<br/><br/>

                            5. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보 제공 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.
                            
                        </AgreeTxt>
                    </AgreeBox>
                </ScrollBox>
            </ConInner>
            <Alert>예약 서비스 이용을 위한 개인정보 수집 및 제3자 제공 규정을 확인하였으며 이에 동의합니다.</Alert>
            <Button>예약하기</Button>
        </Container>
       
    );
};

export default ReserveBookingAgree;