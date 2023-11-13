import { Container, Title } from "../../style_components/Reserve/Reserve-Common";
import {PersonSelect, Alert, PersonNum, Number, NumBtn} from "../../style_components/Reserve/Reserve-Person";
import { useState } from "react";
import add from "../../../images/add.png";
import add_wh from "../../../images/add_wh.png";
import minus from "../../../images/minus.png";
import minus_wh from "../../../images/minus_wh.png";

const ReservePerson = () => {
    // 클릭마다 아이콘 이미지 전환
    const [minusImg, setMinusImg] = useState(minus_wh);
    const [isClicked, setIsClicked] = useState(false);

    const handleClickMinus = () => {
        if (isClicked) {
            setMinusImg(minus_wh);
            setIsClicked(false);
        } else {
            setMinusImg(minus);
            setIsClicked(true);
        }
    }

    // 아이콘 누르면 count +, -
    
    const [count, setCount] = useState(0);
    const onIncrease = () => {
        setCount(prevCount => prevCount +1);
    };
    const onDecrease = () => {
        return count > 0 ? setCount(prevCount => prevCount - 1) : false;
    };
    

 

    return (
        <Container>
            <Title>예약 인원</Title>
            <PersonSelect>
                <p>방문하시는 인원을 선택하세요</p>
                <PersonNum>
                    <NumBtn src={minus_wh} alt="minus" onClick={onDecrease}/>
                    <Number>{count}</Number>
                    <NumBtn src={add_wh} alt="add" onClick={onIncrease}/>
                </PersonNum>
            </PersonSelect>
            <Alert>
                <p>알립니다!</p>
                <p>* 7인 이상 예약은 캐치테이블 앱 또는 유선(02-xxxx-xxxx)상으로만 가능합니다.</p>
            </Alert>
        </Container>
    );
};

export default ReservePerson;