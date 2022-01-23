import Footer from "./components/Footer";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import CompanyDetails from "./pages/CompanyDetails";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import Resources from "./pages/Resources";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" min-h-screen bg-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/company_details" element={<CompanyDetails />} />

        <Route path="/resources" element={<Resources />} />
  
        <Route path="/student_login" element={<StudentLogin />} />
        
        <Route path="/faculty_login" element={<FacultyLogin />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
