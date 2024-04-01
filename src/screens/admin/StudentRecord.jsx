import React, { useEffect, useState } from "react";

const StudentRecord = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    // Fetch students from server
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentRecord;
