import React from "react";
import StudentDashboard from "../components/StudentDashboard";
import StudentData from "../components/StudentData";
import StudentForm from "../components/StudentForm";
import "./Login.css";

const Resources = () => {
  const studentInfo = {
    firstName: "Sudhanshu",
    lastName: "Shekhar",
    branch: "ISE",
    usn: "1BI20IS105",
    email: "sudhanshuvshekhar@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sudhanshu-shekhar-770678198/",
  }

  return (
    <div className="background min-h-screen w-full pb-4 px-4 pt-20  md:pt-28">
      {/* <StudentForm /> */}
      <StudentData />
    </div>
  );
};

export default Resources;
