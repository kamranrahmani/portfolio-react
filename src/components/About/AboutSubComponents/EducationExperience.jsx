import React from "react";
import EduExpComponent from "./EduExpComponent";

function EducationExperience() {
  return (
    <>
      <h1 className="text-center text-white text-2xl mb-12 font-bold">EXPERIENCE & EDUCATION</h1>
      <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 justify-between items-start text-white mx-auto w-4/5 mb-24">
        <div className="flex flex-col space-y-8">
          <EduExpComponent startYear={2022} EndYear={'present'} place={'Perla'} title={'FULL-STACK Developer'} description={'I am working on several web application projects in different domains such as Law and medical witten in React.js for frontend and Node.js for backend'}/>
          <EduExpComponent startYear={2021} EndYear={2022} place={'Nodemon'} title={'FULL-STACK Developer developer'} description={'Worked on multiple medical related web application projects written in React.js for frontend and Node.js for backend.'}/>
          <EduExpComponent startYear={2016} EndYear={2018} place={'Adotel'} title={'Frontend Developer'} description={`I was working on multiple frontend projects:
1- TA Panel that biggest travel agencies in Iran like Snapp & Alibaba use it. Both of these are private panels. 
2- Hotel Reservation process: I created a completely customizable Search Widget and the complete reservation process using ReactJS for all Hotels so they can easily add it to their website.
`}/>
        </div>

        <div className="flex flex-col space-y-6">
          <EduExpComponent title={'MEng Electrical and computer'} startYear={2019} EndYear={2021} place={'Concordia university'} description={'Picked several computer and web-related courses like software engineering, model-driven software development and higher layer telecommunication protocols'}/> 

        </div>

      </div>
    </>
  );
}

export default EducationExperience;
