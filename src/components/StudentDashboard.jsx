import React from "react";

const StudentDashboard = (props) => {

  const { firstName, lastName, branch, usn, email, phone } = props.studentInfo.personalInfo;
  const { linkedIn, stackOverflow } = props.studentInfo.contacts;

  return (
    <div className=" min-h-screen w-full flex flex-col bg-slate-50 rounded-xl shadow-md text-slate-700 py-3 px-2 mx-auto">
      <h1 className=" font-medium text-2xl md:text-3xl text-center border-b-4 border-b-orange-300 pb-3">
        Student Details
      </h1>

      <div className=" mx-auto text-lg md:text-xl mt-10 py-6 md:py-10 px-6 md:px-10 bg-slate-100 md:w-5/6 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5">
        <div className="md:col-span-3 col-span-2 text-xl md:text-2xl font-semibold py-2 border-b-4 border-b-orange-700"> <h1>Personal Info</h1> </div>
        <h3 className="w-fit col-span-2 md:col-span-1">
          <strong>Name: </strong> {firstName} {lastName}
        </h3>
        <h3 className="w-fit">
          <strong>Branch: </strong> {branch}
        </h3>
        <h3 className="w-fit">
          <strong>USN: </strong> {usn}
        </h3>
        <div className="md:col-span-3 col-span-2  text-xl md:text-2xl font-semibold py-3 mt-3 md:mt-5 border-b-4 border-b-orange-700"> <h1>Contacts: </h1> </div>

        <h3 className="w-fit col-span-2">
          <strong>Email: </strong>
          <a
            href={`mailto:${email}`}
            className=" hover:text-orange-300 transition-all"
          >
            
            {email}
          </a>
        </h3>
        <h3 className="w-fit">
          <strong>Phone No: </strong> {phone}
        </h3>
        <h3 className="w-fit col-span-2 md:col-span-2">
          <strong>LinkedIN: </strong>
          <a
            href={linkedIn}
            target="_blank"
            className=" hover:text-orange-300 transition-all"
          >
            Link to profile
          </a>
        </h3>
        <h3 className="w-fit col-span-2 md:col-span-1">
          <strong>Stack Overflow: </strong>
          <a
            href={stackOverflow}
            target="_blank"
            className=" hover:text-orange-300 transition-all md:text-xl"
          >
            Link to profile 
          </a>
        </h3>
        <div className="md:col-span-3 col-span-2 text-xl md:text-2xl font-semibold py-3 mt-3 md:mt-5 border-b-4 border-b-orange-700"> <h1>Co-curricular Activities:</h1> </div>

        <h3 className="w-fit">
          <strong>Clubs: </strong>{" "}
          <ul className=" list-disc pl-10">
            {props.studentInfo.clubs.map((club) => 
               <li key={club}> {club} </li>
            )}
          </ul>
        </h3>
        <h3 className="w-fit">
          <strong>Internships: </strong>{" "}
          <ul className=" list-disc pl-10">
            {props.studentInfo.internships.map((interns) => 
               <li key={interns}> {interns} </li>
            )}
          </ul>
        </h3>
        <h3 className="w-fit">
          <strong>Projects: </strong>{" "}
          <ul className=" list-disc pl-10">
            {props.studentInfo.projects.map((project) => 
               <li key={project}><a href= {project} target= "_blank" className=" hover:text-orange-300 transition-all">Link to the Project </a> </li>
            )}
          </ul>
        </h3>
        
      </div>
    </div>
  );
};

export default StudentDashboard;
