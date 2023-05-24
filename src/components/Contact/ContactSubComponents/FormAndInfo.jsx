import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function FormAndInfo() {
  return (
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-start justify-between mt-32 mb-16 w-4/5 mx-auto">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default FormAndInfo;
