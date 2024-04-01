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

function App() {
  return (
    <div className="App">
      <Login />
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
