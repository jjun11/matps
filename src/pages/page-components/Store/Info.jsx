import { Container, StoreName, StoreDetail, Bar, WishList } from "../../style-components/Store/Store-Info";
import wish from '../../../images/heart.png';
import wish_wh from '../../../images/heart_wh.png';
import { useState, useRef } from "react";

const StoreInfo = ({click}) => {


    const [wishImg, setWishImg] = useState(wish_wh);
    const [isClicked, setIsClicked] = useState(false);

    const handleClickheart = () => {
        if (isClicked) {
            setWishImg(wish_wh);
            setIsClicked(false);
            console.log("찜 취소");
        } else {
            setWishImg(wish);
            setIsClicked(true);
            console.log("찜 누름");
        }
    }

    return (
        <Container>
            <StoreName>을지다락 강남</StoreName>
            <StoreDetail>900 view</StoreDetail>
            <StoreDetail onClick={click}>★★★★★(30)</StoreDetail>
            <Bar></Bar>
            <StoreDetail>11:30~21:10</StoreDetail>
            <StoreDetail>서울 강남구 강남대로96길 22 2층</StoreDetail>
            <StoreDetail>0507-1343-9474</StoreDetail>
            <StoreDetail>음식 종류 : 국수</StoreDetail>
            <StoreDetail>주차 여부 : 주차불가</StoreDetail>
            <WishList onClick={handleClickheart}>
                <img  src={wishImg} alt="withBtn" />
            </WishList>
        </Container>
    );
};

export default StoreInfo;