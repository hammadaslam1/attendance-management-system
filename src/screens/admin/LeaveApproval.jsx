import React, { useEffect, useState } from "react";

const LeaveApproval = () => {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    // Fetch leaves from server
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const handleApprove = async (leaveId) => {
    // Send approval request to server
    fetchLeaves();
  };

  const handleDeny = async (leaveId) => {
    // Send denial request to server
    fetchLeaves();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reason</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {leaves.map((leave) => (
          <tr key={leave.id}>
            <td>{leave.student.name}</td>
            <td>{leave.startDate}</td>
            <td>{leave.endDate}</td>
            <td>{leave.reason}</td>
            <td>
              <button onClick={() => handleApprove(leave.id)}>Approve</button>
              <button onClick={() => handleDeny(leave.id)}>Deny</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaveApproval;
