import React from "react";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";

import "./Main.css";

const Main = () => {
  return (
    <div className="background-image min-h-screen flex flex-col md:flex-row pb-4 px-4 pt-20  md:pt-28">
      <div className="left-panel w-full md:w-3/5 py-4 pt-0 mb-2 mr-3">
        <div className="w-full glassmorphism pl-10 pt-8 pb-14 md:pl-20">
          <h1 className="text-xl w-11/12 text-center text-slate-100 py-2 mb-2 rounded-md header">
            Companies That Visit Our Campus
          </h1>
          <Carousel />
        </div>
        <div className="w-full glassmorphism pl-10 pb-10 md:pl-20 mt-5">
          <h1 className="text-xl w-11/12 text-center text-slate-100 mt-10 py-2 rounded-md header">
            Vision
          </h1>
          <div className=" w-11/12 bg-slate-100 text-orange-700 text-lg text-justify mt-2 px-4 py-3 leading-relaxed rounded-md shadow-md backdrop-blur-xl bg-opacity-80 backdrop-filter bg-clip-padding">
            To enhance and equip our students with the conceptualized
            employability and professional skills in meeting the dynamic
            challenges of the corporate world and acquaint our faculty members
            with current industrial trends.
          </div>
          <h1 className="text-xl text-center w-11/12 text-slate-100 mt-10 py-2 rounded-md header">
            Mission
          </h1>
          <div className=" w-11/12 bg-slate-100 text-orange-700 text-lg text-justify mt-2 pl-8 pr-5 py-3 leading-relaxed rounded-md shadow-md backdrop-blur-xl bg-opacity-80 backdrop-filter bg-clip-padding">
            <ul className=" list-disc">
              <li>To train the students to meet the industry requirements.</li>
              <li>To guide the students to achieve their career goals.</li>
              <li>
                To provide ample placement opportunities for the students to get
                their dream jobs.
              </li>
              <li>
                To equip our faculty members with the latest industry
                requisites.
              </li>
            </ul>
          </div>
          <h1 className="text-xl text-center w-11/12 text-slate-100 mt-10 py-2 rounded-md header">
            The Objectives of the Centre Are As Under:
          </h1>
          <div className=" w-11/12 bg-slate-100 text-orange-700 text-lg text-justify mt-2 mb-8 pl-8 pr-5 py-3 leading-relaxed rounded-md shadow-md backdrop-blur-xl bg-opacity-80 backdrop-filter bg-clip-padding">
            <ul className=" list-disc">
              <li>To enhance industry-institute interaction.</li>
              <li>
                To organize seminar, training programmes and work-shops for
                students so as to help students to learn latest technologies.
              </li>
              <li>
                To organize seminars, technical talks by eminent personalities
                from academic institutes and industry to enhance the awareness
                of students.
              </li>
              <li>To provide guidance and information for higher studies.</li>
              <li>
                To conduct mock tests, interviews, Group Discussions for
                students.
              </li>
              <li>
                To conduct training programs to enhance the communication skills
                and develop inter-personal skills of students.
              </li>
              <li>
                To arrange campus-interviews by inviting leading companies to
                recruit students.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="right-panel w-full md:w-2/5">
        <div className=" w-full px-5 py-4 items-center glassmorphism rounded-md shadow-lg pb-7 ">
          <div class="collapse w-full border border-base-300 collapse-arrow bg-lime-500 backdrop-blur-xl bg-opacity-60 backdrop-filter bg-clip-padding border-none rounded-lg">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-light">
              Process of Placement
            </div>
            <div class="collapse-content">
              <p className=" px-8 text-justify leading-relaxed text-lg border-l-4 border-lime-800">
                <ul className=" list-disc">
                  <li>
                    Every year the enrollment process for placements begins when
                    students come to pre final year.
                  </li>
                  <li>
                    Each department will have one faculty and two student
                    coordinators to facilitate training and placement
                    activities.
                  </li>
                  <li>
                    The coordinators organize mock test and group discussion in
                    their respective classes. External trainers are invited to
                    train the students on solving the aptitude, prepare for
                    group discussion, interview facing skills and technical
                    skills. Experts from the varied industries are invited to
                    give guest lecture on the latest technologies.
                  </li>
                  <li>
                    Every year more than three hundred reputed companies are
                    invited to visit our institution to recruit our students for
                    internship and full time jobs.
                  </li>
                  <li>
                    Several companies send their assessment form to assess our
                    institute before they visit for recruitment. We provide all
                    the required information to the companies. Based on the
                    information provided, companies visit our institution for
                    campus recruitment.
                  </li>
                  <li>
                    More than one hundred and twenty companies from different
                    sectors visit BIT to recruit students for internship and
                    full-time job. More than five hundred students get their
                    dream jobs through placement center.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full px-8 pt-3 pb-7 mt-6 md:mt-4 items-center glassmorphism rounded-md shadow-lg">
          <h1 className="text-xl text-center text-slate-100 py-2 mb-2 rounded-md header">
            Alumni Feedback
          </h1>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Main;
