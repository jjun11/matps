import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/loginmypage/Login";
import Signup from "./pages/signup/Signup";
import MyPage from "./pages/loginmypage/MyPage";
import FindId from "./pages/loginmypage/FindId";
import FindPw from "./pages/loginmypage/FindPw";
import PrivacyPolicy from "./pages/signup/PrivacyPolicy";
import TermsOfUse from "./pages/signup/TermsOfUse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
