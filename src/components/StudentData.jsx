import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase-config";
import StudentDashboard from './StudentDashboard';

const StudentData = () => {
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
      <div>
        {students.map((student)=>{
          return (
            <>
              <StudentDashboard studentInfo = {student} />
            </>
          );
        })}
      </div>
    );
};

export default StudentData;
