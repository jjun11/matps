import styled from "styled-components";

export const StoreListBox01 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;
`;

export const StoreItem = styled.div`
  width: 955px;
  height: 200px;
  border-radius: 1rem;
  border: 1px solid #ecd0d0;
  box-shadow: 2px 2px;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 3px 14px -5px #555555;
`;

// export const StoreIMGBOX = styled.img`
//   width: 255px;
//   height: 200px;
//   /* background-color: #666; */
//   margin-left: 33px;
//   border: 1px solid #666;
//   display: flex;
//   flex-direction: row;
// `;

export const HeartIcon01 = styled.img`
  height: 30px;
  left: 585px;
  /* object-fit: cover; */
  position: relative;
  top: 39px;
  width: 30px;
`;

export const StorListInfo01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #222;
  height: 200px;
  width: 340px;
  gap: 1rem;
  padding-top: 1rem;
`;

export const StoreType01 = styled.div`
  width: 800px;
  height: 24px;
  display: flex;
  font-size: 20px;
  position: relative;
  left: 8px;
  color: #111;
`;

export const StoreNam01 = styled.div`
  width: 1100px;
  height: 47px;
  font-size: 40px;
  display: flex;
  position: relative;
`;

export const StoreRaitingBox01 = styled.div`
  position: relative;
  top: 0px;
  gap: 1rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 340px;
`;

export const StroeRatingStar01 = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  display: flex;
  position: relative;
`;

export const StroeRating01 = styled.div`
  width: 86px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  display: flex;
`;

export const StroeUpdate01 = styled.div`
  position: relative;
  top: -20px;
  width: 200px;
  height: 20px;
  font-size: 14px;
  border: 1px solid #666;
  border-radius: 4px;
  background-color: #d94d4d;
  color: white;
  text-align: center;
`;

export const StoreContacInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  height: 50px;
  top: 132px;
  right: 80px;
`;

export const StoreContac01 = styled.div`
  width: 300px;
  height: 24px;
  font-size: 20px;
  display: flex;
  color: #e6e6e6;
  top: 132px;
`;

export const StoreAddr01 = styled.div`
  width: 300px;
  height: 24px;
  font-size: 20px;
  display: flex;
  color: #e6e6e6;
  top: 172px;
  right: 180px;
`;
