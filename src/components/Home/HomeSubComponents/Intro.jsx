import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GlobalComponents/Button";

function Intro() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col space-y-6 justify-center items-center lg:items-start">
      <h1 className="text-5xl text-yellow-400 text-center lg:text-start font-bold">
        I'm Kamran Rahmani
      </h1>
      <h1 className="text-3xl lg:text-5xl ">Full Stack developer</h1>
      <p className="max-w-sm text-center leading-7 lg:text-start">
        Detail-oriented and passionate Full Stack web developer with 4+ years of
        hands-on experience designing, developing, and implementing applications
        and solutions using a range of technologies and programming languages.
        Seeking to leverage broad development experience and hands-on technical
        expertise in a challenging role as a Full Stack Developer.
      </p>
      <Button onClick={changePage} text={"MORE ABOUT ME"} />
    </div>
  );
}

export default Intro;
