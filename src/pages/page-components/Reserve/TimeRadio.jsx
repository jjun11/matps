import { StyledLabel, StyledRadio } from "../../style_components/Reserve/Reserve-TimeRadio";
import { useState } from "react";


const TimeRadio = () => {

  const [selectedValue, setSelectedValue] = useState("6:00");


  // this.state.selectValue의 값을 이벤트가 발생한 타깃의 값으로 변경 (렌더링을 위함)
  function handleChange(event) {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  }

  return (
      <StyledLabel>
          <StyledRadio htmlFor="time1" isChecked={selectedValue === "6:00"}>
            <label >
              <input 
              type="radio" 
              id="time1" 
              name="reserveTime"  
              onChange={handleChange} 
              value="6:00"
              />
              <span>6:00</span>
            </label>   
          </StyledRadio>

          <StyledRadio htmlFor="time2" isChecked={selectedValue === "6:30"}>
            <label>
              <input 
              type="radio" 
              id="time2" 
              name="reserveTime"  
              onChange={handleChange}
              value="6:30"
               />
              <span>6:30</span>
            </label>
          </StyledRadio>

          <StyledRadio htmlFor="time3" isChecked={selectedValue === "7:00"}>
            <label>
              <input 
              type="radio" 
              id="time3" 
              name="reserveTime"  
              onChange={handleChange} 
              value="7:00"
              />
              <span>7:00</span>
            </label>
          </StyledRadio>

          <StyledRadio htmlFor="time4" isChecked={selectedValue === "7:30"}>
            <label>
              <input 
              type="radio" 
              id="time4" 
              name="reserveTime" 
              onChange={handleChange} 
              value="7:30"
              />
              <span>7:30</span>
            </label>
          </StyledRadio>
          <StyledRadio htmlFor="time5" isChecked={selectedValue === "8:00"}>
            <label>
              <input 
              type="radio" 
              id="time5" 
              name="reserveTime" 
              onChange={handleChange}
              value="8:00"
               />
              <span>8:00</span>
            </label>
          </StyledRadio>
          <StyledRadio htmlFor="time6" isChecked={selectedValue === "8:30"}>
            <label>
              <input 
              type="radio" 
              id="time6" 
              name="reserveTime" 
              onChange={handleChange} 
              value="8:30"
              />
              <span>8:30</span>
            </label>
          </StyledRadio>
          <StyledRadio htmlFor="time7" isChecked={selectedValue === "9:00"}>
            <label>
              <input 
              type="radio" 
              id="time7" 
              name="reserveTime" 
              onChange={handleChange} 
              value="9:00"
              />
              <span>9:00</span>
            </label>
          </StyledRadio>
          {/* {children} */}
            
      </StyledLabel>
      
      
  )
}

export default TimeRadio;