import { useState } from "react";
import { Container, Items } from "../component/MyPageComponent";

 //닉네임
 


const MyPage = () => {

    const [inputNick, setInputNick] = useState("")


return (
    <>
        <Container>
            <Items className="title">
                MyPage
            </Items>
            <Items className="prfimg">

            </Items>
            <Items className="nick">
                닉네임
            </Items>
            <Items className="point">
                나의 포인트: 0
            </Items>
            <Items className="present">
                <div>저장한 맛집
                    <p>8</p>
                </div>
                <div>예약한 내역
                    <p>94</p>
                </div>
                <div>리뷰 확인
                    <p>81</p>
                </div>
                <div>내가 쓴 글
                    <p>2</p>
                </div>
                <div>최근 본 맛집
                    <p>12</p>
                </div>
            </Items>
            <Items className="link">
            <p>문의 및 알림</p>
            <div>고객센터</div>
            <div>공지사항</div>
            <div>약관 및 정책</div>
            <div>현재 버전</div>
            </Items>
        </Container>
    </>
);
};

export default MyPage;