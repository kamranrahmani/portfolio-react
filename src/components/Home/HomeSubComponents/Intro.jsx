import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GlobalComponents/Button";

function Intro() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate('/about')
  }


  return (
    <div className="flex flex-col space-y-8 justify-center items-center lg:items-start mb-16">
      <h1 className="text-5xl text-yellow-400 text-center lg:text-start font-bold">I'm Kamran Rahmani</h1>
      <h1 className="text-3xl lg:text-5xl ">WEB developer</h1>
      <p className="max-w-sm text-center leading-7 lg:text-start">
        I am a frontend developer based in Canada. Focused on creating clean &
        user-friendly experiences, I am passionate about building software that
        can help people.
      </p>
      <Button onClick={changePage} text={'MORE ABOUT ME'}/>
    </div>
  );
}

export default Intro;
