import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
  const students = [
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "rahul ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
    { name: "Harsh ", roll: 743838, m1: 84, m2: 98, m3: 94 },
  ];
  return (
    <div>
      {students.map((student, index) => (
        <Marks
          Key={index}
          name={student.name}
          roll={student.roll}
          m1={student.m1}
          m2={student.m2}
          m3={student.m3}
        />
      ))}
    </div>
  );
};

export default DisplayMarks;
