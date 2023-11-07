import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Login2 from "./pages/Login2";
import Signup2 from "./pages/Signup2";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login2 />} />
        {/* <Route path="/" element={<Signup2 />} /> */}
        {/* <Route path="/Layout" elemen t={<Layout />} /> */}
        {/* <Route path="/Login" elemen t={<Login />} /> */}

        {/* <Route path="/Profile" element={<Profile />} /> */}
        {/* <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
