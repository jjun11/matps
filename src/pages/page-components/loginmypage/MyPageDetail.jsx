import { useState } from "react";
import { Container, Items, Input, Button } from "../../style-components/loginmypage/MyPageDetailComponent";



const MyPageDetail = () => {
    const [selectedCategory, setSelectedCategory] = useState('저장한 맛집');
    const categories = ['저장한 맛집', '예약한 내역', '리뷰 확인', '내가 쓴 글', '최근 본 맛집'];
    const titleone = ['상호명', '상호명', '상호명', '제목', '상호명'];
    const titletwo = ['주소', '주소', '주소', '상호명', '주소'];
    const titlethree = ['전화번호', '전화번호', '전화번호', '주소', '전화번호'];
    const titlefour = ['영업시간', '예약일자', '작성일자', '작성일자', '영업시간'];
    const titlefive = ['주차가능여부', '예약시간', '글내용', '글내용', '주차가능여부'];

   const selectedCategoryIndex = categories.indexOf(selectedCategory);
    return (
        <>
        <Container>
            {/* <Items className="present">
                <div>
                    저장한 맛집
                    <p>0</p>
                </div>
                <div>
                    예약한 내역
                    <p>0</p>
                </div>
                <div>
                    리뷰 확인
                    <p>0</p>
                </div>
                <div>
                    내가 쓴 글<p>0</p>
                </div>
                <div>
                    최근 본 맛집
                    <p>0</p>
                </div>
            </Items>
            <Items className="detail">
                <div className="saveStore">

                </div>
                <div className="reserve">

                </div>
                <div className="review">
                    
                </div>
                <div className="post">

                </div>
                <div className="viewStore">

                </div>
            </Items> */}
            <Items className="present">
        {categories.map((category, index) => ( // 카테고리 목록을 순회하며
          <div
            key={index} // 카테고리 이름을 키로 사용
            onClick={() => setSelectedCategory(category)} // 클릭하면 선택된 카테고리로 설정
            style={{ background: selectedCategory === category ? 'linear-gradient(to top, #fff860, #f5ce26)' : 'white' }} // 선택된 카테고리는 회색, 나머지는 하양
          >
            {category}
            <p>0</p>
          </div>
        ))}
      </Items>
      <Items className="detail">
        <div className="Header">
          {/* {selectedCategory && <h1>{selectedCategory}</h1>} */}
          <div className="one">{titleone[selectedCategoryIndex]}</div>
          <div className="two">{titletwo[selectedCategoryIndex]}</div>
          <div className="three">{titlethree[selectedCategoryIndex]}</div>
          <div className="four">{titlefour[selectedCategoryIndex]}</div>
          <div className="five">{titlefive[selectedCategoryIndex]}</div>
          <div className="shadow"></div>
        </div>
        {/* <div className="contents">
        <div className="one">상호명</div>
          <div className="two">주소</div>
          <div className="three">전화번호</div>
          <div className="four">영업시간</div>
          <div className="five">주차 가능 여부</div>
            <hr />
        </div> */}
      </Items>

        </Container>
        </>
    );
};

export default MyPageDetail;
