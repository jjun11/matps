import { BottomBox, FlexBox, LeftBox, RightBox } from "../../style_components/Reserve/Page-Layout";
import { Bar } from "../../style_components/Store/Store-ReviewBox";
import GlobalStyle from '../../style_components/Global_style';
import ReserveOfficial from "../../page-components/Reserve/Official";
import ReserveTime from "../../page-components/Reserve/Time";
import ReservePerson from "../../page-components/Reserve/Person";
import ReserveCheck from "../../page-components/Reserve/Check";
import ReserveCalendar from "../../page-components/Reserve/Calendar";
import ReserveClientInfo from "../../page-components/Reserve/ClientInfo";
import ReserveSellerInfo from "../../page-components/Reserve/SellerInfo";
import ReserveBookingAgree from "../../page-components/Reserve/BookingAgree";


const Reserve = () => {
    return (
        <>
            <GlobalStyle/>
            <FlexBox>
                <LeftBox>
                    <ReserveOfficial />
                    <Bar/>
                    <ReserveCalendar />
                </LeftBox>
                <RightBox>
                    <ReserveTime />
                    <Bar />
                    <ReservePerson />
                    <Bar />
                    <ReserveCheck />
                </RightBox>
            </FlexBox>
      
            <BottomBox>
                <Bar />
                <ReserveClientInfo />
                <Bar />
                <ReserveSellerInfo />
                <Bar />
                <ReserveBookingAgree />
            </BottomBox>
  
        </>
       

   
    );
};

export default Reserve;