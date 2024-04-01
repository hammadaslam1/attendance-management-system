import React, { useEffect, useState } from "react";

const ReportGeneration = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    // Fetch attendance from server
  };

  const generateReport = async () => {
    // Send request to server to generate report
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <>
      <label>
        From Date:
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </label>
      <label>
        To Date:
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </label>
      <button onClick={generateReport}>Generate Report</button>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((att) => (
            <tr key={att.id}>
              <td>{att.student.name}</td>
              <td>{att.subject}</td>
              <td>{att.timeIn}</td>
              <td>{att.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReportGeneration;
