import React from "react";
import "./Login.css";

const Resources = () => {
  return (
    <div className="background min-h-screen w-full pb-4 px-4 pt-20  md:pt-28">
      <div className=" min-h-screen w-full bgGlass md:px-40 py-3 px-3 md:py-9 grid grid-cols-1 md:grid-cols-2 gap-7 text-center">
        <div className=" w-full bg-orange-200 rounded-xl hover:ring-2 hover:ring-orange-200 shadow-md bg-opacity-30 ease-in duration-200 text-center pt-5 px-3">
          <strong className=" text-xl text-slate-600 font-medium">
            Aptitude Resources and papers
          </strong>
          <p className=" text-lg text-slate-500"> Add Links to resources </p>
        </div>
        <div className=" w-full bg-orange-200 rounded-xl hover:ring-2 hover:ring-orange-200 shadow-md bg-opacity-30 ease-in duration-200 pt-5 px-3">
          <strong className=" text-xl text-slate-600 font-medium">
            Verbal and communication resources and papers
          </strong>
          <p className=" text-lg text-slate-500"> Add Links to resources </p>
        </div>
        <div className=" w-full bg-orange-200 rounded-xl hover:ring-2 hover:ring-orange-200 shadow-md bg-opacity-30 ease-in duration-200 pt-5 px-3">
          <strong className=" text-xl text-slate-600 font-medium">
            Techniacal Resources and papers
          </strong>
          <p className=" text-lg text-slate-500"> Add Links to resources </p>
        </div>
        <div className=" w-full bg-orange-200 rounded-xl hover:ring-2 hover:ring-orange-200 shadow-md bg-opacity-30 ease-in duration-200 pt-5 px-3">
          <strong className=" text-xl text-slate-600 font-medium">
            Logical reasoning resources and papers
          </strong>
          <p className=" text-lg text-slate-500"> Add Links to resources </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
