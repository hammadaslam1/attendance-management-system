import React, { useState } from "react";

const Attendance = () => {
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send attendance request to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <button type="submit">Mark Attendance</button>
    </form>
  );
};

export default Attendance;
