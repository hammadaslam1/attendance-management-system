import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Registration from "../Registration";
import Home from "../Home";
import Sidebar from "../../components/Sidebar";
import Navigation from "./Navigation";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const EnterApp = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <BrowserRouter>
        {user && (
          <>
            <Navbar />
            <Sidebar />
          </>
        )}
        <Routes>
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </>
          )}
          <Route element={<Navigation />}>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default EnterApp;
