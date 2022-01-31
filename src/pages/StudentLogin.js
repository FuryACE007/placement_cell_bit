import React, { useRef, useState, useEffect } from "react"; // useEffect would be removed later
import "./Login.css";

// temporary additions
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import StudentData from "../components/StudentData";

const Login = () => {
  // temporary addtions
  const [students, setStudents] = useState([]);
  const studentsCollectionRef = collection(db, "Student1");

  useEffect(() => {
    const getStudent = async () => {
      const data = await getDocs(studentsCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudent();
  }, []);
  
  const stud = students.map( (student) =>{
    return(
      {
        userId: student.userId,
        password: student.password,
      }
    );
  } );
    
  console.log(stud.at(0));
  /////////////////////////////////////////////////////////////////////////////////

  const studentIdInputRef = useRef();
  const studentPasswordInputRef = useRef();

  const [authStatus, setAuthStatus] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredStudentId = studentIdInputRef.current.value;
    const enteredStudentPassword = studentPasswordInputRef.current.value;

    console.log(enteredStudentId, enteredStudentPassword);

    //tmp code
    if (
      enteredStudentId === stud.at(0).userId &&
      enteredStudentPassword === stud.at(0).password
    ) {
      setAuthStatus(true);
    } else{
      setAuthStatus(false);
      alert("Credentials don't match! Please try again.");
    }
  };
  console.log("auth",authStatus);
  if (authStatus) {
    return(
      <div className="background min-h-screen w-full pb-4 px-4 pt-20  md:pt-28 text-white">
          <StudentData />
      </div>
    );
  } else {
      return (
        <div className=" min-h-screen flex flex-col pb-12 px-4 lg:pt-28 pt-32 background">
          <div class="flex flex-col w-full lg:flex-row">
            {/* Student Login */}

            <div class="bg-[#c5e490] grid flex-grow place-items-center lg:pt-16 lg:pb-32 md:pb-40 py-20 rounded-3xl">
              <h1 className=" text-2xl mb-8 pb-2 border-b-4 text-emerald-800 font-semibold border-[#9cc05d]">
                Student Login
              </h1>
              <form
                class=" px-16 card lg:w-2/5 md:w-3/5 w-5/6 py-20 neumorph shadow-md"
                onSubmit={submitHandler}
              >
                <div class="form-control">
                  <label htmlFor="student_id" class="label">
                    <span class="label-text text-lg text-emerald-700 font-medium">Student ID</span>
                  </label>
                  <input
                    type="text"
                    id="student_id"
                    placeholder=""
                    className=" bg-[#a7cf63] outline-none border-0 rounded-lg py-3 px-3 focus:ring-2 focus:ring-[#9cc05d] ease-in duration-300 "
                    required
                    ref={studentIdInputRef}
                  />
                  <label htmlFor="student_password" class="label mt-6">
                    <span class="label-text text-lg text-emerald-700 font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    id="student_password"
                    placeholder=""
                    className=" bg-[#a7cf63] outline-none border-0 rounded-lg py-3 px-3 focus:ring-2 focus:ring-[#9cc05d] ease-in duration-300"
                    required
                    ref={studentPasswordInputRef}
                  />
                  <button
                    type="submit"
                    className=" text-left bg-[#b8e26e] w-fit my-5 py-3 px-8 rounded-3xl font-semibold text-slate-50 shadow-lg hover:shadow-md hover:text-slate-300 hover:bg-[#9cc05d] ease-in duration-300"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
};

export default Login;
