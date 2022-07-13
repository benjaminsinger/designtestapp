import React from "react";

export const NextSteps = () => {
  return (
    <div className="bg-white py-10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 lg:w-2/3 mx-auto">
          <h2 className="text-xl font-bold text-brand-primary mb-6">
            How you can use this report
          </h2>
          <p className="mb-5 text-base">
            The information in your report can be used in several ways. Your
            next steps depend on what you’d like to achieve.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="bg-brand-primary text-white p-8 rounded flex flex-col">
            <h4 className="mb-4 text-md font-bold">
              Discuss my skills with ease
            </h4>
            <p className="mb-4 text-base">
              When filling out your CV or application, draw from all 4 sections
              of the report to give employers a rounded picture of your
              abilities.
            </p>
            <p className="mb-4 text-base">
              For advice on writing applications and CVs with your report, visit
              our dedicated section.
            </p>

            <a href="/" className="block hover:font-bold mt-auto">
              Visit Applications and CV Advice
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="inline-block ml-2"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
              </svg>
            </a>
          </div>
          <div className="bg-brand-secondary text-white p-8 rounded flex flex-col">
            <h4 className="mb-4 font-bold text-md">
              Build on my skills through learning or training
            </h4>
            <p className="mb-4 text-base">
              You may have found your previous roles used lots of skills from
              one area. But by balancing all areas of your skillset, more jobs
              may be available to you.
            </p>
            <p className="mb-4 text-base">
              We have many funded learning options to help you gather new
              skills. Choose from flexible opportunities that work around your
              other responsibilities.
            </p>

            <a href="/" className="block hover:font-bold mt-auto">
              Visit Learn and Train
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="inline-block ml-2"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
