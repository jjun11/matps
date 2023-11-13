import { Outlet } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GlobalStyle from "../../style-components/Global_style";
import Posting from "./Posting";
import { useNavigate } from "react-router-dom";

const PostingLayout = () => {
  const Navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Posting>
        <Outlet />
      </Posting>
      <Footer />
    </>
  );
};

export default PostingLayout;
