import StoreImgBox from '../../page-components/Store/ImgBox';
import StoreInfo from '../../page-components/Store/Info';
import GlobalStyle from '../../style-components/Global_style';
import StoreMap from '../../page-components/Store/Map';
import { FlexBox, LeftBox, RightBox } from '../../style-components/Store/Page-Layout';
import StoreReserve from '../../page-components/Store/Reserve';
import StoreMenu from '../../page-components/Store/Menu';
import StoreReview from '../../page-components/Store/Review';
import StorePost from '../../page-components/Store/Post';
import { useRef } from 'react';


const Store = () => {
  // info랑 리뷰랑 둘 다 관리하려면 최상위에서 함수를 가지고 props 해야함
  // 이벤트 본체는 하위에 있기 때문.
  // 부모가 전달하고 자식이 이벤트를 발생시키면 -> 다시 부모가 알아내고 리뷰한테 이동하라고 props날림 
  const childRef = useRef();
  const handleClick = () => {
    //  child로 위치를 지정해 놓고 명령 (myRef->변수 이름임)
    if (childRef.current) {
      console.log("handleClick Call!!!!");
      childRef.current.scrollToMyElement(); // 하위 컴포넌트의 함수 호출
    }
  };

  return (
    <>
      <GlobalStyle/>
      <StoreImgBox/>
      <FlexBox>
        <StoreInfo click={handleClick}/>
        <RightBox>
            <StoreMap/>
            <StoreReserve/>
        </RightBox>
      </FlexBox>
      <FlexBox>
        <LeftBox>
            <StoreMenu/>
            <StoreReview ref={childRef}/>
        </LeftBox>
        <StorePost/>
      </FlexBox>
      
    </>
    

  );
}

export default Store;