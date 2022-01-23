import React, { useRef } from "react";
import "./Login.css";

const FacultyLogin = () => {
  const facultyIdInputRef = useRef();
  const facultyPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFacultyId = facultyIdInputRef.current.value;
    const enteredFacultyPassword = facultyPasswordInputRef.current.value;

    console.log(enteredFacultyId, enteredFacultyPassword);
  };

  return (
    <div className="min-h-screen flex flex-col pb-12 px-4 lg:pt-28 pt-32 background">
      <div className="flex flex-col w-full lg:flex-row">
        <div class=" bg-[#2c7be2] grid flex-grow place-items-center lg:pt-16 lg:pb-32 md:pb-40 py-20 rounded-3xl">
          <h1 className=" text-2xl mb-8 pb-2 border-b-4 text-slate-200 border-[#2a69bb]">
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
                type="email"
                id="faculty_id"
                placeholder=""
                className=" bg-[#2a69bb] outline-none border-0 rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 ease-in duration-300 "
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
                className=" bg-[#2a69bb] outline-none border-0 rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 ease-in duration-300"
                required
                ref={facultyPasswordInputRef}
              />
              <button
                type="submit"
                className=" text-left bg-blue-500 w-fit my-5 py-3 px-8 rounded-3xl text-slate-200 shadow-lg hover:shadow-md hover:text-slate-300 hover:bg-blue-600 ease-in duration-300"
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
