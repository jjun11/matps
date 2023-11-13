import styled from "styled-components";

export const ContainerBox = styled.div`

`;

export const CalendarSetting = styled.div`

    button {
    cursor: pointer;
    color: inherit;
    background-color: #fff;
  }
    // 전체 틀: border, border-radius 조정
    .react-calendar {
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid var(--festie-gray-400, #c8c8c8); 
  }

  .react-calendar__navigation__label > span {
    // 달력 상단 년/월 글씨 커스텀
    color: var(--festie-gray-800, #3a3a3a);
    /* font-family: SUIT Variable; */
    font-size: 13px;
    font-weight: 500;
    line-height: 140%;
  }
  .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: var(--festie-gray-800, #d94d4d);
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    // 전월 날짜, 다음월 날짜 연하게.
  color: #757575;
}
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    //hover 했을 때 색상 변경
    background-color: #d94d4d;
    color: #fff;
  }
  .react-calendar__tile--now {
    // 오늘 날짜 하이라이트 커스텀
    border: 2px solid #d94d4d;
    background: white;
    color: var(--festie-gray-800, #3a3a3a);
  }
  .react-calendar__tile--active {
    background: #d94d4d;
    color: white;
  }
    `;
