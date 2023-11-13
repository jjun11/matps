import styled from "styled-components";


export const StyledLabel = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    :hover {
        cursor: pointer;
    }
`

export const StyledRadio = styled.div`  
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;

    
    label {
        width: 70px;
        height: 40px;
        padding: 10px 20px;
        
        background-color: #fff;
        border-radius: 30px;
        border: 3px solid #d94d4d;
        box-sizing: border-box;
        position: relative;
        
        background-color: ${(props) => (props.isChecked ? "#d94d4d" : "#fff")};
    }
   
    label > input {
        display: none;
        /* visibility : hidden */
    }
    span {
        font-size: 1.2rem;
        font-weight: 900;
        color: #d94d4d;
        color: ${(props) => (props.isChecked ? "white" : "#d94d4d")};
        position: absolute;
        top: 7px;
        left: 14px;
    }
    
    :hover {
        cursor: pointer;
    }

    :checked input { 
        color : #fff;
        background-color: #d94d4d;
        border: none;
        
        :disabled {
            background: center url("사용할 svg 이미지의 data url") no-repeat;
        }
    }

    :disabled {
        & + span {
            cursor: default;
        }

        :hover {
            cursor: default;
        }
    }

    :checked ~ span {
        /* color: #000000; */
    }


`



    