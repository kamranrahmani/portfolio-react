import EduExpComponent from "./EduExpComponent";

function EducationExperience() {
  return (
    <>
      <h1 className="text-center text-white text-2xl mb-12 font-bold">
        EXPERIENCE & EDUCATION
      </h1>
      <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 justify-between items-start text-white mx-auto w-4/5 mb-24">
        <div className="flex flex-col space-y-8">
        <EduExpComponent
            startYear={2023}
            EndYear={"2024"}
            place={"TCG Machines"}
            title={"Full-stack Developer"}
            description={
              "I was part of a team of developers working on a web application that was sending data from users to a TCG card sorting machine."
            }
          />
        <EduExpComponent
            startYear={2022}
            EndYear={"2023"}
            place={"Perla"}
            title={"Full-stack Developer"}
            description={
              "I was working on a web application project in healthcare domain with the goal of automating admistrative tasks for doctors and patients. I was using React.js for frontend and Node.js for backend."
            }
          />
          <EduExpComponent
            startYear={2021}
            EndYear={"2022"}
            place={"Nodemon LLC"}
            title={"Software Engineer"}
            description={
              "I was working on a voting application called Opingo witten in React.js for frontend and Node.js for backend"
            }
          />
          
          
        </div>

        <div className="flex flex-col space-y-6">
          <EduExpComponent
            title={"MEng Electrical and computer"}
            startYear={2019}
            EndYear={2021}
            place={"Concordia university"}
            description={
              "Picked several computer and web-related courses like software engineering, model-driven software development and higher layer telecommunication protocols"
            }
          />
        </div>
      </div>
    </>
  );
}

export default EducationExperience;
