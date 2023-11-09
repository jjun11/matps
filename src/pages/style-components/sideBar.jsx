import React, {useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #F8F5EC;
`;

const SidebarWrapper = styled.div`
  background-color: #F8F5EC;
  border-left: 3px solid #FFFFFF;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.4s ease;
  color: #202020;
  height: 100%;
  z-index: 99;
`;

const Button = styled.button`
  position: relative;
  left: -50px;
  top: 10px;
  width: 40px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 2px solid #202020;
  border-radius: 40px;
  overflow: hidden;
`;

const OpenBtn = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding: 40px 40px 0 20px;
  position: relative;
  width: 100%;
`;

const Icon = styled.div`
  margin: 0;
  color: #202020;
`;

const Sidebar = ({ width=640, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width); 
      await setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
    <div className={styled.container}>
      <div ref={side}  className={styled.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onClick={() => toggleMenu()}
          className={styled.button} >
            {isOpen ? 
            <span>X</span> : <img src="images/avatar.png" alr="contact open button" className={styled.openBtn}/>
            }
          </button>
        <div className={styled.content}>{children}</div> {/*사이드바 컴포넌트 내부 값이 구현되는 위치*/}
      </div>
      </div>
  );
};


export default Sidebar;