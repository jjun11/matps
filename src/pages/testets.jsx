import React, { useState } from 'react';
import Modal from 'react-modal';

// 모달의 스타일을 설정합니다. 필요에 따라 수정하세요.
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // 앱의 루트 요소를 설정합니다. 필요에 따라 수정하세요.

function Signup() {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const agreeAndCloseModal = () => {
    setTermsAgreed(true);
    setPrivacyAgreed(true);
    setModalIsOpen(false);
  };

  return (
    <Items className="agree">
      <span>이용약관 동의</span>
      <Input
        className="agree"
        type="checkbox"
        id="termsCheckbox"
        checked={termsAgreed}
        onChange={() => setTermsAgreed(!termsAgreed)}
      />
      <button onClick={openModal}>약관보기</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>이용약관</h2>
        <button onClick={agreeAndCloseModal}>동의하기</button>
        <button onClick={closeModal}>닫기</button>
      </Modal>
      <span>개인정보 처리방침 동의</span>
      <Input
        className="agree"
        type="checkbox"
        id="privacyCheckbox"
        checked={privacyAgreed}
        onChange={() => setPrivacyAgreed(!privacyAgreed)}
      />
      <button onClick={openModal}>약관보기</button>
    </Items>
  );
}

export default Signup;