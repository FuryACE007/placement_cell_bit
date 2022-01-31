import React, { useEffect, useRef, useState } from "react";

import StudentForm from "../components/StudentForm";
import "./Login.css";

const FacultyLogin = () => {
  const facultyIdInputRef = useRef();
  const facultyPasswordInputRef = useRef();

  const [authStatus, setAuthStatus] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFacultyId = facultyIdInputRef.current.value;
    const enteredFacultyPassword = facultyPasswordInputRef.current.value;

    setAuthStatus(true);

    console.log(enteredFacultyId, enteredFacultyPassword);
  };
  if (authStatus) {
    return (
      <div className="min-h-screen flex flex-col pb-12 px-4 lg:pt-28 pt-32 background">
        <h1 className=" text-white text-4xl">
          {" "}
          This section of the website is still under development. The form shows
          a general representation of the input form received by the faculties
          for entering particular student data as well as for query. Would be
          developed soon...{" "}
        </h1>
        <StudentForm />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col pb-12 px-4 lg:pt-28 pt-32 background">
      <div className="flex flex-col w-full lg:flex-row">
        <div class=" bg-[#C1DEAE] grid flex-grow place-items-center lg:pt-16 lg:pb-32 md:pb-40 py-20 rounded-3xl text-white">
          <h1 className=" text-2xl mb-8 pb-2 border-b-4 border-[#9bbb86]">
            {" "}
            Faculty Login{" "}
          </h1>
          <form
            class="px-16 card lg:w-2/5 md:w-3/5 w-5/6 py-20 neumorph_faculty shadow-md"
            onSubmit={submitHandler}
          >
            <div class="form-control">
              <label htmlFor="faculty_id" class="label">
                <span class="label-text text-lg">Faculty ID</span>
              </label>
              <input
                type="text"
                id="faculty_id"
                placeholder=""
                className=" bg-[#a5ca8c] outline-none border-0 rounded-lg py-3 px-2 focus:ring-2 focus:ring-[#9bbb86] ease-in duration-300 "
                required
                ref={facultyIdInputRef}
              />
              <label htmlFor="faculty_password" class="label mt-6">
                <span class="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                id="faculty_password"
                placeholder=""
                className=" bg-[#a5ca8c] outline-none border-0 rounded-lg py-3 px-2 focus:ring-2 focus:ring-[#9bbb86] ease-in duration-300"
                required
                ref={facultyPasswordInputRef}
              />
              <button
                type="submit"
                className=" text-left bg-[#b6de9c] w-fit my-5 py-3 px-8 rounded-3xl shadow-lg hover:shadow-md hover:text-slate-100 hover:bg-[#9bbb86] ease-in duration-300"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
