import {Container, Storetitle, CalendarBtn, Calendar, CalendarIcon} from "../../style-components/Store/Store-Reserve";
import calendarIcon from "../../../images/calendar.png";

const StoreReserve = () => {
    return (
        <Container>
            <Storetitle>예약</Storetitle>
            <CalendarBtn>
                <Calendar>Calendar</Calendar>
                <CalendarIcon src={calendarIcon} alt="calendarIcon"></CalendarIcon>
            </CalendarBtn>
        </Container>
    );
};

export default StoreReserve;