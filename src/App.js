import React, { Suspense } from "react";

import Footer from "./components/Footer";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
// import CompanyDetails from "./pages/CompanyDetails";
// import StudentLogin from "./pages/StudentLogin";
// import FacultyLogin from "./pages/FacultyLogin";
// import Resources from "./pages/Resources";

import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const CompanyDetails = React.lazy(() => import("./pages/CompanyDetails"));
const StudentLogin = React.lazy(() => import("./pages/StudentLogin"));
const FacultyLogin = React.lazy(() => import("./pages/FacultyLogin"));
const Resources = React.lazy(() => import("./pages/Resources"));

const App = () => {
  return (
    <div className=" min-h-screen bg-slate-100">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex min-h-screen my-auto mx-auto">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/company_details" element={<CompanyDetails />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/student_login" element={<StudentLogin />} />

          <Route path="/faculty_login" element={<FacultyLogin />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
