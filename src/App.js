import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/page-components/loginmypage/Login";
import Signup from "./pages/page-components/signup/Signup";
import MyPage from "./pages/page-components/loginmypage/MyPage";
import FindId from "./pages/page-components/loginmypage/FindId";
import FindPw from "./pages/page-components/loginmypage/FindPw";
import PrivacyPolicy from "./pages/page-components/signup/PrivacyPolicy";
import TermsOfUse from "./pages/page-components/signup/TermsOfUse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw/>} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
