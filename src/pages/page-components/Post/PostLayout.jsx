import { Outlet } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GlobalStyle from "../../style-components/Global_style";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

const PostLayout = () => {
  const Navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Post>
        <Outlet />
      </Post>
      <Footer />
    </>
  );
};

export default PostLayout;
