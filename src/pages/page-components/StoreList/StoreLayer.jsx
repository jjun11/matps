import React from "react";
import StoreListBoxMap from "./StoreListBox";
import {
  CenterLayer,
  FilterContainer,
  FilterBox01,
  PeopleNum,
  FilterBox02,
  FoodCheck,
  FilterBox03,
  RegionCheck,
  FilterBox04,
  PriceCheck,
  FilterBox05,
  ParkingCheck,
  ListMain,
  StoreMainMap,
  CenterWord,
  StyledScreen,
  StoreListScreen,
} from "../../style-components/StoreList/StoreList-StoreLayer";
import StoreListMap from "../StoreList/ListPageMap";

const StoreLayer = () => {
  return (
    <CenterLayer>
      <ListMain>
        {/* <StoreMainMap> */}
        <StoreListMap />
        {/* </StoreMainMap> */}

        <StyledScreen>
          <CenterWord>
            당신이 기대하던, 소중한 시간을 위한 식당을 Matps가 함께 찾고
            있습니다.
          </CenterWord>
        </StyledScreen>

        <StoreListScreen>
          <StoreListBoxMap />
        </StoreListScreen>
      </ListMain>
    </CenterLayer>
  );
};

export default StoreLayer;
