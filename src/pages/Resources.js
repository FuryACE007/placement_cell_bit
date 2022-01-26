import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import StudentForm from "../components/StudentForm";
import db from "../firebase-config";
import "./Login.css";

const Resources = () => {
  const [students, setStudents] = useState([]);
  const studentsCollectionRef = collection(db, "Student1");

  useEffect(() => {
    const getStudent = async () => {
      const data = await getDocs(studentsCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudent();
  }, []);

  return (
    <div className="background min-h-screen flex flex-col pb-4 px-4 pt-36  md:pt-28">
      {/* <StudentForm /> */}
      {students.map((student)=>{
        return <div>
          
          <h1>Name: {student.personalInfo.firstName} {student.personalInfo.lastName} </h1>
          <h1>Branch: {student.personalInfo.branch} </h1>
        </div>
      })}
    </div>
  );
};

export default Resources;
