import React, { useEffect, useState } from "react";

const AttendanceManagement = () => {
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    // Fetch attendance from server
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleEdit = (attendanceId) => {
    // Open modal to edit attendance
  };

  const handleDelete = async (attendanceId) => {
    // Send delete request to server
    fetchAttendance();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Subject</th>
          <th>Time In</th>
          <th>Time Out</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((att) => (
          <tr key={att.id}>
            <td>{att.student.name}</td>
            <td>{att.subject}</td>
            <td>{att.timeIn}</td>
            <td>{att.timeOut}</td>
            <td>
              <button onClick={() => handleEdit(att.id)}>Edit</button>
              <button onClick={() => handleDelete(att.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceManagement;
