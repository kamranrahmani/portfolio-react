import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../GlobalComponents/Button";

function Intro() {
  const navigate = useNavigate();

  const changePage = () => {
    navigate('/about')
  }


  return (
    <div className="flex flex-col space-y-8 justify-center items-start">
      <h1 className="text-5xl text-yellow-400 font-bold">I'm Kamran Rahmani</h1>
      <h1 className="text-5xl">WEB developer</h1>
      <p className="max-w-md leading-7">
        I am a frontend developer based in Canada. Focused on creating clean &
        user-friendly experiences, I am passionate about building software that
        can help people.
      </p>
      <Button onClick={changePage} text={'MORE ABOUT ME'}/>
    </div>
  );
}

export default Intro;
