import React, { useState } from "react";

const LeaveRequest = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send leave request to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Reason:
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
      </label>
      <button type="submit">Send Leave Request</button>
    </form>
  );
};

export default LeaveRequest;
