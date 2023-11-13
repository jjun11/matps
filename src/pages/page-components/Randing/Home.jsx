import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../style-components/Global_style";
import {
  media,
  MainContainer,
  toggleMenu,
  MainPage,
  MainText,
  MainRow,
  MatpsImgPart,
  MatpsImage,
  Maintext_left,
  Maintext_right,
  Button,
  Togglebar,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  StyledArrowDown,
} from "../../style-components/Randing/Randing-Home";
import img from "../../../images/matps가로로고.png";
import ArrowDownImage from "../../../images/arrow_down.png";
import { Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("나홀로");
  const [selectedLocation, setSelectedLocation] = useState("강남구");
  const [selectedFood, setSelectedFood] = useState("회덮밥");

  const toggleMenu = () => {
    if (!showMenu) {
      setShowLocationMenu(false);
      setShowFoodMenu(false);
    }
    setShowMenu(!showMenu);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowMenu(false);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setShowLocationMenu(false);
  };

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setShowFoodMenu(false);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MainPage>
          <MainText>
            <MainRow>
              <Maintext_left>나는</Maintext_left>
              <DropdownContainer>
                <Togglebar onClick={toggleMenu}>
                  {selectedOption}
                  <StyledArrowDown src={ArrowDownImage} show={showMenu} />
                </Togglebar>
                {showMenu && (
                  <DropdownMenu show={showMenu}>
                    <DropdownItem onClick={() => handleSelect("나홀로")}>
                      나홀로
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("가족과 함께")}>
                      가족과 함께
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("아이와 함께")}>
                      아이와 함께
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("연인과 함께")}>
                      연인과 함께
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("친구와 함께")}>
                      친구와 함께
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>
            </MainRow>
            <MainRow>
              {/* 위치 선택 드롭다운 */}
              <DropdownContainer>
                <Togglebar
                  onClick={() => setShowLocationMenu(!showLocationMenu)}
                >
                  {selectedLocation}
                  <StyledArrowDown
                    src={ArrowDownImage}
                    show={showLocationMenu}
                  />
                </Togglebar>
                {showLocationMenu && (
                  <DropdownMenu show={showLocationMenu}>
                    <DropdownItem
                      onClick={() => handleSelectLocation("강남구")}
                    >
                      강남구
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleSelectLocation("송파구")}
                    >
                      송파구
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleSelectLocation("강동구")}
                    >
                      강동구
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleSelectLocation("마포구")}
                    >
                      마포구
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>
              <Maintext_right>에서</Maintext_right>
            </MainRow>
            <MainRow>
              <DropdownContainer>
                <Togglebar onClick={() => setShowFoodMenu(!showFoodMenu)}>
                  {selectedFood}
                  <StyledArrowDown src={ArrowDownImage} show={showFoodMenu} />
                </Togglebar>
                {showFoodMenu && (
                  <DropdownMenu show={showFoodMenu}>
                    <DropdownItem onClick={() => handleSelectFood("회덮밥")}>
                      회덮밥
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelectFood("삼겹살")}>
                      삼겹살
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelectFood("커피")}>
                      커피
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelectFood("칼국수")}>
                      칼국수
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelectFood("곱창")}>
                      곱창
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>
              <Maintext_right>먹고싶어요</Maintext_right>
            </MainRow>
            <MainRow>
              <Button
                onClick={() => {
                  navigate("/StoreListLayout");
                }}
              >
                검색 결과
              </Button>

              <Button
                onClick={() => {
                  navigate("/StoreListLayout");
                }}
              >
                직접 검색
              </Button>
            </MainRow>
          </MainText>
          <MatpsImgPart>
            <MatpsImage src={img} alt="Matps Logo" />
          </MatpsImgPart>
        </MainPage>
      </MainContainer>
    </>
  );
};

export default Home;
