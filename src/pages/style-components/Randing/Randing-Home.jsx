import styled from 'styled-components';

export const media = {
    desktop: (...args) => `@media (min-width: 1920px) { ${args} }`,
    tablet: (...args) => `@media (max-width: 768px) { ${args} }`,
    phone: (...args) => `@media (max-width: 360px) { ${args} }`,
};

export const MainContainer = styled.div`
    display: block;

  ${media.desktop`
    padding: 11rem 10rem;
    max-width: 1280px;
  `}

  ${media.tablet`
    padding: 5rem;
    flex-direction: column; 
  `}

  ${media.phone`
    padding: 2rem;
    flex-direction: column; 
  `}
`;

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 11rem 5rem;
  margin: 0 auto;

  ${media.desktop`
    padding: 11rem 10rem;
    max-width: 1280px;
  `}

  ${media.tablet`
    padding: 5rem;
    flex-direction: column; 
  `}

  ${media.phone`
    padding: 2rem;
    flex-direction: column; 
  `}
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  white-space: nowrap;
  ${media.tablet`
    align-items: center;
    text-align: left;

  `}

  ${media.phone`
    align-items: center;
    text-align: left;
  `}
`;

export const MainRow = styled.div`
    display: flex;
    align-items: center;
`;

export const MatpsImgPart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.tablet`
    margin-top: 2rem;
  `}
  ${media.phone`
    margin-top: 1rem;
  `}
`;

export const MatpsImage = styled.img`
    position: relative;
    align-items: center;
    justify-content: center;
    display: block;
    max-width: 100%;
    height: auto;
    opacity: 0.8; 

    ${media.tablet`
        margin-top: 2rem;
    `}

    ${media.phone`
        margin-top: 1rem;
    `}
`;

export const Maintext_left = styled.span`
    font-size: 70px;
    padding: 10px 10px;
    font-weight: lighter;
    color: #333;
`;
export const Maintext_right = styled.span`
    font-size: 70px;
    padding: 10px 10px;
    color: #333;
    font-weight: lighter;
    width: 30vw;

    ${media.tablet`
    margin-right: 0.5rem;
    font-size: 55px;
  `}

  ${media.phone`
    margin-right: 0.5rem;
    font-size: 40px;
  `}
`;

export const Button = styled.button`
    border: none;
    color: white;    
    padding: 15px 15px;
    margin: 10px 10px;
    text-align: center;
    text-align-last: center;
    text-decoration: none;
    width: 300px;
    border-radius: 5px;
    font-size: 30px;
    background-color: #D94D4D;
`;
export const Togglebar = styled.button`
    border: none;
    background: #fff;
    color: #333;
    border-bottom  : 1px solid;
    text-decoration: none;
    font-size: 60px;
    font-weight: bolder;
    background-color: transparent;
    display: inline-flex;
    align-items: center; 
    justify-content: space-between;
    cursor: pointer; 
    padding: 0rem 0.5rem;
    white-space: nowrap;
`;

export const DropdownContainer = styled.div`
    position: relative;
    width: auto;
    padding: 0;
`;

export const DropdownMenu = styled.ul`
    list-style: none;
    background: #fff;
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 0 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 100;
    overflow: hidden;
    transition: opacity 0.5s ease-in-out;
    max-height: ${props => props.show ? '300px' : '0'};
    opacity: ${props => props.show ? '1' : '0'};
`;

export const DropdownItem = styled.li`
    padding: 15px 15px;
    text-align: center;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: #f6f6f6;
    }
`;

export const StyledArrowDown = styled.img`
    height: 1.5rem;
    margin-left: 1rem;
    vertical-align: middle;
    transform: ${props => (props.show ? 'rotate(180deg)' : 'none')};
`;

