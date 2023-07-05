import React, { useState } from 'react';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    grade: '',
    address: ''
  });

  const [studentDataList, setStudentDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current student data to the list
    setStudentDataList((prevDataList) => [...prevDataList, studentData]);

    // Reset the form after submission
    setStudentData({
      name: '',
      age: '',
      grade: '',
      address: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{}}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={studentData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={studentData.age}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={studentData.grade}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={studentData.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table style={{marginLeft:"43%"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {studentDataList.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentForm;
