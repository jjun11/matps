import { Outlet } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GlobalStyle from "../../style-components/Global_style";
import { useNavigate } from "react-router-dom";
import StoreLayer from "./StoreLayer";

const StoreListLayout = () => {
  const Navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header />
      <StoreLayer>
        <Outlet />
      </StoreLayer>
      <Footer />
    </>
  );
};

export default StoreListLayout;
