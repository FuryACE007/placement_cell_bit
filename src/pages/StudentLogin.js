import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const studentIdInputRef = useRef();
  const studentPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredStudentId = studentIdInputRef.current.value;
    const enteredStudentPassword = studentPasswordInputRef.current.value;
    // const enteredFacultyId = facultyIdInputRef.current.value;
    // const enteredFacultyPassword = facultyPasswordInputRef.current.value;

    console.log(enteredStudentId, enteredStudentPassword);
  };

  return (
    <div className=" min-h-screen flex flex-col pb-12 px-4 lg:pt-28 pt-32 background">
      <div class="flex flex-col w-full lg:flex-row">
        {/* Student Login */}

        <div class="bg-lime-600 grid flex-grow place-items-center lg:pt-16 lg:pb-32 md:pb-40 py-20 rounded-3xl">
          <h1 className=" text-2xl mb-8 pb-2 border-b-4 text-slate-200 border-lime-700">
            {" "}
            Student Login{" "}
          </h1>
          <form
            class=" px-16 card lg:w-2/5 md:w-3/5 w-5/6 py-20 neumorph shadow-md"
            onSubmit={submitHandler}
          >
            <div class="form-control">
              <label htmlFor="student_id" class="label">
                <span class="label-text text-lg">Student ID</span>
              </label>
              <input
                type="email"
                id="student_id"
                placeholder="Student ID"
                className=" bg-lime-700 outline-none border-0 rounded-lg py-3 px-3 focus:ring-2 focus:ring-lime-800 ease-in duration-300 "
                required
                ref={studentIdInputRef}
              />
              <label htmlFor="student_password" class="label mt-6">
                <span class="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                id="student_password"
                placeholder="Password"
                className=" bg-lime-700 outline-none border-0 rounded-lg py-3 px-3 focus:ring-2 focus:ring-lime-800 ease-in duration-300"
                required
                ref={studentPasswordInputRef}
              />
              <button
                type="submit"
                className=" text-left bg-[#82bd28] w-fit my-5 py-3 px-8 rounded-3xl text-slate-200 shadow-lg hover:shadow-md hover:text-slate-300 hover:bg-[#63931a] ease-in duration-300"
              >
                {" "}
                Log in{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
