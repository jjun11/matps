import { useEffect, useState } from "react";
import {
  Container,
  Items,
  Input,
  Button,
} from "../../style-components/loginmypage/MyPageDetailComponent";
import GlobalStyle from "../../style-components/Global_style";
import AxiosApi from "../../../Api/AxiosApi";

const MyPageDetail = () => {
  var userReview = JSON.parse(window.localStorage.getItem("userReview"));
  var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  const [res, setRes] = useState(userReview);
  const [selectedCategory, setSelectedCategory] = useState("저장한 맛집");
  const categories = [
    "저장한 맛집",
    "예약한 내역",
    "리뷰 확인",
    "내가 쓴 글",
    "최근 본 맛집",
  ];
  const titleone = ["상호명", "상호명", "상호명", "상호명", "상호명"];
  const titletwo = ["주소", "예약일자", "작성일시", "작성일시", "주소"];
  const titlethree = ["영업시간", "예약시간", "글내용", "제목", "영업시간"];
  const titlefour = [
    "영업시간",
    "예약일자",
    "작성일자",
    "작성일자",
    "영업시간",
  ];
  const titlefive = [
    "주차가능여부",
    "예약시간",
    "글내용",
    "글내용",
    "주차가능여부",
  ];

  const selectedCategoryIndex = categories.indexOf(selectedCategory);

  useEffect(() => {
    if (selectedCategory === "리뷰 확인") {
      console.log(userInfo.my_nickname);
      const fetchData = async () => {
        try {
          const response = await AxiosApi.reviewGet(userInfo.my_nickname);
          console.log(response.data);
          window.localStorage.setItem(
            "userReview",
            JSON.stringify(response.data[0])
          ); // 브라우저 로컬 스토리지에 리뷰 정보 저장
          var userReview = JSON.parse(
            window.localStorage.getItem("userReview")
          );
          console.log(userReview);
          setRes = userReview;
        } catch (error) {
          console.error("리뷰를 가져오는 데 실패했습니다:", error);
        }
      };

      fetchData();
    }
  }, [selectedCategory]);

  const contentone = [
    res.store_name,
    res.store_name,
    res.store_name,
    res.store_name,
    res.store_name,
  ];
  const contenttwo = ["", "", res.review_date, "", ""];
  const contentthree = ["", "", res.review_text, "", ""];
  const contentfour = [];
  const contentfive = [];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Items className="present">
          {categories.map(
            (
              category,
              index // 카테고리 목록을 순회하며
            ) => (
              <div
                key={index} // 카테고리 이름을 키로 사용
                onClick={() => setSelectedCategory(category)} // 클릭하면 선택된 카테고리로 설정
                style={{
                  background:
                    selectedCategory === category
                      ? "linear-gradient(to top, #fff860, #f5ce26)"
                      : "white",
                }} // 선택된 카테고리는 회색, 나머지는 하양
              >
                {category}
                <p>0</p>
              </div>
            )
          )}
        </Items>
        <Items className="detail">
          <div className="Header">
            {/* {selectedCategory && <h1>{selectedCategory}</h1>} */}
            <div className="one">{titleone[selectedCategoryIndex]}</div>
            <div className="two">{titletwo[selectedCategoryIndex]}</div>
            <div className="three">{titlethree[selectedCategoryIndex]}</div>
            {/* <div className="four">{titlefour[selectedCategoryIndex]}</div> */}
            {/* <div className="five">{titlefive[selectedCategoryIndex]}</div> */}
            <div className="shadow"></div>
          </div>
          <div className="contents">
            <div className="one">{contentone[selectedCategoryIndex]}</div>
            <div className="two">{contenttwo[selectedCategoryIndex]}</div>
            <div className="three">{contentthree[selectedCategoryIndex]}</div>
            {/* <div className="four">영업시간</div>
          <div className="five">주차 가능 여부</div> */}
            <hr />
          </div>
        </Items>
      </Container>
    </>
  );
};

export default MyPageDetail;
