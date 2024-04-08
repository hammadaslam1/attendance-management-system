import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "../Login";
import Registration from "../Registration";
import Home from "../Home";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const Navigation = () => {
  // const { currentUser } = useSelector((state) => state.user);
  return true ? <Outlet /> : <Navigate to={'/login'} />;
};

export default Navigation;
