import React from "react";
import "./Login.css";

const CompanyDetails = () => {
  return (
    <div className=" background min-h-screen flex flex-col pb-4 px-4 pt-36 md:pt-28">
      <h1 className=" bg-lime-600 px-3 py-2 text-center text-lg font-medium rounded-md">
        Company Details
      </h1>
      <div class="bg-white p-8 rounded-md w-full">
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Job Description
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Package Offered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning-666x333.jpg"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            Amazon
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">SDE</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www.amazon.jobs/en-gb/jobs/1213880/software-development-engineer-sde" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">43 LPA</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://scontent.fixr3-1.fna.fbcdn.net/v/t39.8562-6/109960336_274477960450922_1306319190754819753_n.png?_nc_cat=107&ccb=1-5&_nc_sid=6825c5&_nc_ohc=V7SJ5RfDzqIAX-bXLR8&_nc_ht=scontent.fixr3-1.fna&oh=00_AT847Jk0LCLLADPUXsV82XSJBsiO1tNue9FDkx8RMSZjlg&oe=61ED6DB0"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            Facebook
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">Web Application Developer</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www.facebookcareers.com/" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">25 LPA</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-profile.jpg"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            Deloitte
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">Systems Engineer</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www2.deloitte.com/global/en/pages/operations/solutions/systems-engineering.html" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">12 LPA</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://www.zs.com/content/dam/images/logos/ZS_Logo_RGB@4x.png"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            ZS
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">Software Testing</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www.amazon.jobs/en-gb/jobs/1213880/software-development-engineer-sde" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">8 LPA</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://toppng.com/uploads/preview/infosys-vector-logo-free-download-11574200524wvzgyrao38.png"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            Infosys
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">Network Engineer</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www.amazon.jobs/en-gb/jobs/1213880/software-development-engineer-sde" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">5 LPA</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://toppng.com/uploads/preview/accenture-logo-transparent-accenture-greater-than-logo-11562971252rdqqagrmhw.png"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 text-base whitespace-no-wrap font-semibold">
                            Accenture
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">Business Analyst</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <a href="https://www.amazon.jobs/en-gb/jobs/1213880/software-development-engineer-sde" target= "_blank" className=" font-semibold text-base text-lime-500 hover:text-lime-600 ease-in duration-200">Details</a>
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap pl-5">3 LPA</p>
                    </td>
                  </tr>
                  

                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
