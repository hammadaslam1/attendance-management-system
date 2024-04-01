import React, { useEffect, useState } from "react";

const ViewAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    // Fetch attendance from server
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Time In</th>
          <th>Time Out</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((att) => (
          <tr key={att.id}>
            <td>{att.subject}</td>
            <td>{att.timeIn}</td>
            <td>{att.timeOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewAttendance;
