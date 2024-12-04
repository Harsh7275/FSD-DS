import React from "react";
import "./Marks.css";
const Marks = ({ name, roll, m1, m2, m3 }) => {
  return (
    <div>
      <h1>Student-Profile</h1>
      <h2>Name:{name}</h2>
      <h2>Roll No:{roll}</h2>
      <h2>Semester-Marks</h2>
      <table>
        <tr>
          <td>
            <h2>Semester</h2>
          </td>
          <td>
            <h2>Marks</h2>
          </td>
        </tr>

        <tr>
          <td>Semester1</td>
          <td>{m1}</td>
        </tr>
        <tr>
          <td>Semester2</td>
          <td>{m2}</td>
        </tr>
        <tr>
          <td>Semester3</td>
          <td>{m3}</td>
        </tr>
      </table>
    </div>
  );
};

export default Marks;
