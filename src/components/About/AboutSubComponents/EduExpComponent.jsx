import React from "react";
import { FaBriefcase } from "react-icons/fa";

function EduExpComponent({ title, place, description, startYear, EndYear }) {
  if (!EndYear) {
    EndYear = false;
  }
  title = title.toUpperCase();
  place = place.toUpperCase();


  return (
    <div className="relative inline-flex flex-col justify-start items-start pl-10 border-l-[1px] border-white/10">
      <div className="absolute flex items-center justify-center top-5 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 rounded-full">
        <FaBriefcase style={{ fontSize: "20px" }} />
      </div>
      <div className="bg-white/10 rounded-full text-white/50 text-sm font-bold px-3 mb-3">
        <span className="mr-1">{startYear}</span>
        <span>-</span>
        <span className="ml-1">{EndYear}</span>
      </div>

      <div className="text-lg mb-3">{title} - {place}</div>
      <p className="max-w-md text-white/60">
       {description} 
      </p>
    </div>
  );
}

export default EduExpComponent;
