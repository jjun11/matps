import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    // 회원 로그인을 위한 함수
    const login = {
      // 로그인 정보를 담은 객체를 생성
      id: id, // 사용자 아이디를 설정
      pwd: pw, // 사용자 비밀번호를 설정
    };

    return await axios.post(KH_DOMAIN + "/users/login", login); // 로그인 API에 POST 요청
  },
  //회원 조회
  memberGet: async (id) => {
    // 회원 정보 조회를 위한 함수
    return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`); //회원 조회 API에 GET 요청
  },

  // 회원 가입
  memberReg: async (id, pw, name, nick, mail, gender) => {
    // 회원 가입을 위한 함수
    const sign = {
      // 회원 정보를 담은 객체를 생성 .
      id: id, // 사용자 아이디를 설정
      pwd: pw, // 사용자 비밀번호를 설정
      name: name, // 사용자 이름을 설정
      nick: nick, // 사용자 닉네임을 설정
      mail: mail, // 사용자 이메일을 설정
      gender: gender, // 사용자 성별을 설정
    };
    return await axios.post(KH_DOMAIN + "/users/sign", sign); // 회원 가입 API에 POST 요청
  },
  
  // 회원 정보 수정
  memberUpd: async (id, nick, profile_img) => {
    // 회원 가입을 위한 함수
    const update = {
      // 회원 정보를 담은 객체를 생성 .
      id: id, // 사용자 아이디를 설정
      nick: nick, // 사용자 닉네임을 설정
      profile_img: profile_img // 사용자 프로필 이미지를 설정
    };
    return await axios.post(KH_DOMAIN + "/users/update", update); // 회원 가입 API에 POST 요청
  },

  // 아이디 중복여부 확인
  memberRegCheckId: async (id) => {
    // 회원 가입 여부를 확인하기 위한 함수
    return await axios.get(KH_DOMAIN + `/users/checkId?id=${id}`); // 아이디 중복여부 확인 API 에 POST 요청
  },
// 닉네임 중복여부 확인
  memberRegCheckNick: async (nick) => {
    // 회원 가입 여부를 확인하기 위한 함수
    return await axios.get(KH_DOMAIN + `/users/checkNick?nick=${nick}`); // 회원 가입 여부 확인 API에 POST 요청
  },
  // 회원 탈퇴
  memberDel: async (id) => {
    // 회원 탈퇴를 위한 함수
    const del = {
      // 탈퇴를 위한 정보를 담은 객체를 생성
      id: id, // 사용자 아이디를 설정
    };
    return await axios.post(KH_DOMAIN + "/users/del", del); // 회원 탈퇴 API에 POST 요청
  },
};

export default AxiosApi; // AxiosApi 객체를 모듈로 내보냄
