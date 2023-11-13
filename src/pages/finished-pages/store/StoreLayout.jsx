import { Outlet } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GlobalStyle from "../../style-components/Global_style";
import Store from "./Store";
import { useNavigate } from "react-router-dom";

const StoreLayout = () => {
  const Navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Store>
        <Outlet />
      </Store>
      <Footer />
    </>
  );
};

export default StoreLayout;
