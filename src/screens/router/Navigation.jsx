import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Registration from "../Registration";
import Home from "../Home";

const Navigation = () => {
  return (
    // <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
};

export default Navigation;
