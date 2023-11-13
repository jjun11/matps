import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import {Container, ReviewBtn, ReviewTitle} from "../../style-components/Store/Store-Review";
import ReviewWrite from "./ReviewWrite";
import ReviewBox from "./ReviewBox";
import ReviewIcon from "../../../images/review.png";
import { TitleBox } from "../../style-components/Store/Store-Post";


//  props 빼면 오류남
const StoreReview = forwardRef((props, ref) => {
    const myRef = useRef();
  
    // useImperativeHandle를 사용하여 ref에 함수를 전달
    useImperativeHandle(ref, () => ({
      scrollToMyElement: () => {
        myRef.current.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const [visible, setVisible] = useState(false);
    return (
        <Container ref={myRef}>
            <TitleBox>
                <ReviewTitle>리뷰</ReviewTitle>
                <ReviewBtn 
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    <span>{visible ? "작성 끝내기" : "후기 남기기"}</span>
                    <img src={ReviewIcon} alt="Review Icon" />
                </ReviewBtn>
            </TitleBox>
            {visible && <ReviewWrite />}
            <ReviewBox/>
            <ReviewBox/>
        </Container>
    );
});

export default StoreReview;