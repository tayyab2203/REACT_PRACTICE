import React from "react";

const StudentMapPractice = () => {
  const StudentMarks = [
    {
      rollno: "BSCSE-22-49",
      cgpa: 3.4,
    },
    {
      rollno: "BSCSE-22-35",
      cgpa: 3.3,
    },
    {
      rollno: "BSCSE-22-1221",
      cgpa: 3.12,
    },
  ];

  return (
    <>
      <div>StudentMapPractice</div>
      <h1 className="bg-sky-600 animate-pulse text-black p-3 m-2 rounded-xl border-b-emerald-900">Below is the list Of students with their CGPA</h1>
      {StudentMarks.map((student) => (
        <p className="m-2 p-4 bg-slate-500 rounded-2xl hover:translate-0.5 transition-all">
          {student.rollno} got {student.cgpa}.
        </p>
      ))}
    </>
  );
};

export default StudentMapPractice;
