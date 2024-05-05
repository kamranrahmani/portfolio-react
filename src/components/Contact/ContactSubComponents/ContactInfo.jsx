
import ContactDetailsComponent from "./ContactDetailsComponent";
import {
  FaMap,
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="flex flex-col space-y-4 items-start justify-start">
      <h1 className="text-2xl font-bold">Let&apos;s get in touch</h1>
      <p className="max-w-xs">
      </p>
      <ContactDetailsComponent
        logo={<FaMap style={{ fontSize: "35px", color: "rgb(234,179,8)" }} />}
        title={"ADDRESS"}
        detail={"Halifax, NS, Canada"}
      />
      <ContactDetailsComponent
        logo={
          <FaEnvelopeOpen
            style={{ fontSize: "35px", color: "rgb(234,179,8)" }}
          />
        }
        title={"Mail Me"}
        detail={"rahmanikamran95@gmail.com"}
      />
      <ContactDetailsComponent
        logo={
          <FaPhoneAlt style={{ fontSize: "35px", color: "rgb(234,179,8)" }} />
        }
        title={"CALL ME"}
        detail={"(647) 832-3660"}
      />
      <div className="flex justify-start items-center space-x-3">
        <a
          href="https://linkedin.com/in/rahmanikamran95"
          className="flex items-center justify-center bg-white/10 rounded-full w-10 h-10 hover:bg-yellow-500 duration-200"
        >
          <FaLinkedin style={{ fontSize: "20px"}} />
        </a>
        <a
          href="https://github.com/kamranrahmani"
          className="flex items-center justify-center bg-white/10 rounded-full w-10 h-10 hover:bg-yellow-500 duration-200"
        >
          <FaGithub style={{ fontSize: "20px" }}/>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
