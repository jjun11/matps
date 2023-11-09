import StoreImgBox from '../../page-components/Store/ImgBox';
import StoreInfo from '../../page-components/Store/Info';
import GlobalStyle from '../../style_components/Global_style';
import StoreMap from '../../page-components/Store/Map';
import { FlexBox, LeftBox, RightBox } from '../../style_components/Store/Page-Layout';
import StoreReserve from '../../page-components/Store/Reserve';
import StoreMenu from '../../page-components/Store/Menu';
import StoreReview from '../../page-components/Store/Review';
import StorePost from '../../page-components/Store/Post';



function Store() {
  return (
    <>
      <GlobalStyle/>
      <StoreImgBox/>
      <FlexBox>
        <StoreInfo />
        <RightBox>
            <StoreMap/>
            <StoreReserve/>
        </RightBox>
      </FlexBox>
      <FlexBox>
        <LeftBox>
            <StoreMenu/>
            <StoreReview/>
        </LeftBox>
        <StorePost/>
      </FlexBox>
      
    </>
    

  );
}

export default Store;