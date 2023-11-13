import { Container, ReserveTxt, Title } from "../../style_components/Reserve/Reserve-Common";

const ReserveOfficial = () => {
    return (
        <Container>
            <Title>예약 안내</Title>
            <ReserveTxt>* 당일예약은 전화주시면 빠른 응대가 가능합니다. (당일 예약 마감으로 뜰 경우 전화로 문의주세요.)</ReserveTxt>
            <ReserveTxt>* 4인이상 예약 및 당일 예약, 주말 및 공휴일 예약은 캐치테이블 또는 전화예약으로만 가능합니다.</ReserveTxt>
            <ReserveTxt>* 알러지나 특이사항이 있으시면 유선으로 문의 부탁드립니다.</ReserveTxt>
        </Container>
    );
};

export default ReserveOfficial;