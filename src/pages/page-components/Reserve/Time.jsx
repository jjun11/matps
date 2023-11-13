import { Container, Title } from "../../style_components/Reserve/Reserve-Common";
import { Timetable } from "../../style_components/Reserve/Reserve-Time";
import { TimeBox } from "../../style_components/Reserve/Reserve-TimeRadio";
import TimeRadio from "./TimeRadio";



const ReserveTime = () => {
    return (
        <Container>
            <Title>예약 시간</Title>
            <Timetable>
                <TimeRadio/>            
            </Timetable>
        </Container>
    );
};

export default ReserveTime;
