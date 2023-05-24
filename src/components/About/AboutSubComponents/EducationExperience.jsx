import React from "react";
import EduExpComponent from "./EduExpComponent";

function EducationExperience() {
  return (
    <>
      <h1 className="text-center text-white text-2xl mb-12 font-bold">EXPERIENCE & EDUCATION</h1>
      <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 justify-between items-start text-white mx-auto w-4/5 mb-24">
        <div className="flex flex-col space-y-8">
          <EduExpComponent startYear={2020} EndYear={2022} place={'Adotel Co'} title={'Frontend Developer'} description={'I was working on multiple frontend projects like TA panel that biggest travel agancies in Iran like Alibaba and Snapp use it'}/>
          <EduExpComponent startYear={2017} EndYear={2019} place={'Aftab Advertising Group'} title={'React Js developer'} description={'I was working on a simple website and application for a TV Talent show about football'}/>
          <EduExpComponent startYear={2016} EndYear={2017} place={'HipoTrip'} title={'JavaScript Developer'} description={'I was working on an online reservation system for flights, hotels & trains. I was able to refactor their website and build their application from scratch'}/>
        </div>

        <div className="flex flex-col space-y-6">
          <EduExpComponent title={'MEng Electrical and computer'} startYear={2019} EndYear={2021} place={'Concordia university'} description={'Picked several computer and web-related courses like software engineering, model-driven software development and higher layer telecommunication protocols'}/> 

        </div>

      </div>
    </>
  );
}

export default EducationExperience;
