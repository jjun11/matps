import { Title } from "../../style_components/Reserve/Reserve-Common";
import { CalendarSetting } from "../../style_components/Reserve/Reserve-Calendar";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const ReserveCalendar = () => {
    const [value, onChange] = useState(new Date());
    const [nowDate, setNowDate] = useState("일정 선택");
    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        console.log(selectedDate);
        setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    }

    return (
        
        <CalendarSetting>
            <Title>{nowDate}</Title>
            {/* onChange가 setValue역할을 함 */}
            <Calendar
                onChange={handleDateChange} 
                value={value}
                // 달력 '일'삭제
                formatDay={(locale, date) => moment(date).format("DD")}>
            </Calendar>
        </CalendarSetting>
        
    );
};
export default ReserveCalendar;