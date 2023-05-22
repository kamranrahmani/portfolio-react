import React from "react";

function AchievementItem({achQuant, achTitle}) {
  return (
    <div className="flex flex-col space-y-4 items-start justify-start border-[1px] border-white/10 rounded h-40 pt-6 pr-28 pl-10 hover:shadow-md hover:shadow-yellow-500 hover:scale-105 transition duration-300">
      <div className="flex items-start">
        <span className="text-yellow-500 text-5xl font-bold">{achQuant}</span>
        <span className="text-yellow-500 text-3xl font-bold">+</span>
      </div>
      <div className="flex justify-center items-start space-x-2">
        <span className="block w-6 h-[1px] bg-white mt-3"></span>
        <div className="w-24">{achTitle}</div>
      </div>
    </div>
  );
}

export default AchievementItem;
