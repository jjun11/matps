import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Items,
} from "../../style-components/loginmypage/MyPageComponent";
import Settings from "../../../images/settings.png";
import AxiosApi from "../../../Api/AxiosApi";
import Modal from "../../../util/Modal";
import ProfileImg from "../../../images/profileImg.png";
import ModalUpd from "../../../util/Modal_Upd";

//닉네임

const MyPage = () => {
  const [inputNick, setInputNick] = useState("");
  const [nickname, setNickname] = useState("");
  var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  if (userInfo.my_profile_img == null) {
    userInfo.my_profile_img = ProfileImg;
  }

  const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  const onClickLogout = async () => {
    window.localStorage.setItem("userInfo", ""); // 브라우저 로컬 스토리지에 유저 정보 저장
    window.localStorage.setItem("userId", ""); // 브라우저 로컬 스토리지에 아이디 저장
    window.localStorage.setItem("userPw", ""); // 브라우저 로컬 스토리지에 패스워드 저장
    window.localStorage.setItem("isLogin", "FALSE"); // 로그인 상태 저장
    navigate("/Login");
  };

  const onClickUpdate = async () => {
    navigate("/Update");
  };

  const onClickDelete = async () => {
    console.log("회원탈퇴 진행, 탈퇴여부 재확인");
    const confirmDelete = window.confirm("탈퇴 후 회원정보는 영구 삭제되며 복원되지 않습니다. 정말 탈퇴하시겠습니까?");
    
    if(confirmDelete) {
    console.log("회원탈퇴 수락");
    const memberDel = await AxiosApi.memberDel(userId);
    console.log("삭제 회원 아이디 : " + userId);
    console.log("삭제 결과 : " + memberDel.data); // 회원 삭제 결과 출력
    window.alert("회원 탈퇴가 완료되었습니다."); // 회원 탈퇴 완료 메시지 표시
    navigate("/Login");
    } else {
      console.log("회원탈퇴 취소");
    }
  };

  return (
    <>
      <Container>
        <Items className="title">MyPage</Items>
        <Items className="prfimg rounded">
          <img
            src={userInfo.my_profile_img}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </Items>
        <Items className="nick">{userInfo.my_nickname}</Items>
        <Items className="update" onClick={onClickUpdate}>
          내 정보 수정{" "}
        </Items>
        <Items className="present">
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
            내가 쓴 글
            <p>0</p>
          </div>
          <div>
            최근 본 맛집
            <p>0</p>
          </div>
        </Items>
        <Items className="link">
          <p>문의 및 알림</p>
          <div><span button onClick={() => window.open("/TermsOfUse", "_blank")}>
            이용약관</span>
          </div>
          <div><span button onClick={() => window.open("/PrivacyPolicy", "_blank")}>
            개인정보처리방침</span>
          </div>
          <div><span onClick={() => alert('현재 버전: 1.0.0')}>현재 버전</span></div>
          <div><span onClick={onClickDelete} style={{ color: "#d94d4d" }}>회원 탈퇴</span></div>
        </Items>
        <Items className="foot">
          <div className="logout" onClick={onClickLogout}>
            로그아웃
          </div>
        </Items>
      </Container>
    </>
  );
};

export default MyPage;
