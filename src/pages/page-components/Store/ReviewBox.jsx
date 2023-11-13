import {Bar, ScrollBox, Profile, ProFileImg, ReviewNickname, ReviewTxt, ReviewArea, ReviewImgFlexBox, Images, ReviewFlex} from "../../style-components/Store/Store-ReviewBox";


const ReviewBox = () => {
    return(
        <>
        <Bar/>
        <ReviewFlex>
            <Profile>
                <ProFileImg/>
                <ReviewNickname>닉네임</ReviewNickname>
            </Profile>
            <ReviewArea>
                <ReviewTxt>2023. 10. 22.</ReviewTxt>
                <ReviewTxt>★★★★</ReviewTxt>
                <ReviewTxt>감각적인 분위기와 특급 음식, 럭셔리한 느낌이 가득한 곳. 이곳에서 느끼는 감동은 다르다!</ReviewTxt>
                
                <ScrollBox className="scrollStyle">
                    <ReviewImgFlexBox>
                        <Images></Images>
                        <Images></Images>
                        <Images></Images>
                        <Images></Images>
                    </ReviewImgFlexBox>
                </ScrollBox>
            </ReviewArea>
        </ReviewFlex>
        </> 
    );
};

export default ReviewBox;