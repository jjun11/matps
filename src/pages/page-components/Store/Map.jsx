import {Container} from "../../style-components/Store/Store-Map";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../../../Api/KakaoMapApi";

// const { kakao } = window;
const StoreMap = () => {
    useKakaoLoader()

    return(
        <Container>
            <Map id="map"
            center={{
                // 지도의 중심좌표
                lat: 37.49999990286302,
                lng: 127.02879367071698
            }}
            level={3} >
                <MapMarker // 마커를 생성합니다
                    position={{
                    // 마커가 표시될 위치입니다
                    lat: 37.49999990286302,
                    lng: 127.02879367071698
                    }}
                />
            </Map>
        </Container>
    );
};

export default StoreMap;