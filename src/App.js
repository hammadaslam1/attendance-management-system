import logo from "./logo.svg";
import "./App.css";
import Attendance from "./screens/client/Attendance";
import AttendanceManagement from "./screens/admin/AttendanceManagement";
import LeaveRequest from "./screens/client/LeaveRequest";
import ViewAttendance from "./screens/client/ViewAttendance";
import LeaveApproval from "./screens/admin/LeaveApproval";
import ReportGeneration from "./screens/admin/ReportGeneration";
import StudentRecord from "./screens/admin/StudentRecord";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import LAYER from "./components/assets/bg_layer.png";
import Navigation from "./screens/router/Navigation";

function App() {
  return (
    <div
      className="layer flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${LAYER})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />
      {/* <Login /> */}
      {/* <Registration /> */}

      {/* client */}
      {/* <Attendance /> */}
      {/* <LeaveRequest /> */}
      {/* <ViewAttendance /> */}

      {/* admin */}
      {/* <AttendanceManagement /> */}
      {/* <LeaveApproval /> */}
      {/* <ReportGeneration /> */}
      {/* <StudentRecord /> */}
    </div>
  );
}

export default App;
