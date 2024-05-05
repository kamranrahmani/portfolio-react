
import Header from "../GlobalComponents/Header";
import Menu from "../GlobalComponents/Menu";
import FormAndInfo from "./ContactSubComponents/FormAndInfo";

function Contact() {
  return (
    <div className="text-white">
      <Header
        backTitle={"CONTACT"}
        frontTitleWhite={"GET IN"}
        frontTitleYellow={"TOUCH"}
      />
      <Menu />
      <FormAndInfo />
    </div>
  );
}

export default Contact;
