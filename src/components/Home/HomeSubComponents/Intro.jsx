
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
        I&apos;m Kamran Rahmani
      </h1>
      <h1 className="text-3xl lg:text-5xl ">Full Stack developer</h1>
      <p className="max-w-sm text-center leading-7 lg:text-start">
        I am a Full Stack Developer with over 3 years of experience in building
        web applications. I have a strong understanding of front-end and
        back-end technologies. I am passionate about learning new technologies
        and building scalable applications.
      </p>
      <Button onClick={changePage} text={"MORE ABOUT ME"} />
    </div>
  );
}

export default Intro;
