import React, { useState } from "react";
import Button from "../../GlobalComponents/Button";


function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const nameHandler = (e) => {
    setSenderName(e.target.value);
  };
  const emailHandler = (e) => {
    setSenderEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSenderSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setSenderMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const API_KEY = import.meta.env.VITE_API_KEY;
      
    const messageToSend = {
      sender: {
        name: senderName,
        email: "rahmanikamran95@gmail.com",
      },
      to: [
        {
          email: "rahmanikamran95@gmail.com",
          name: "kamran rahmani",
        },
      ],
      subject: senderSubject,
      htmlContent: `<html><head></head><body><p>sender's email: ${senderEmail}</p><p>${senderMessage}</p></body></html>`,
    };

    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageToSend),
    }).then((data) => {
      setSenderName("");
      setSenderEmail("");
      setSenderSubject("");
      setSenderMessage("");
      alert("you email has been sent successfully");
    });
  };

  return (
    <form onSubmit={submitHandler} className="grid grid-cols-2 gap-8 w-[70%]">
      <input
        type="text"
        className="w-full bg-white/10 rounded-full px-6 py-3 outline-none focus:outline-1 focus:outline-yellow-500"
        placeholder="YOUR NAME"
        required
        onChange={nameHandler}
        value={senderName}
      />
      <input
        type="email"
        className="w-full bg-white/10 rounded-full px-6 py-3 outline-none focus:outline-1 focus:outline-yellow-500"
        placeholder="YOUR EMAIL"
        required
        onChange={emailHandler}
        value={senderEmail}
      />
      <input
        type="text"
        className="w-full bg-white/10 rounded-full px-6 py-3 col-span-2 outline-none focus:outline-1 focus:outline-yellow-500"
        placeholder="YOUR SUBJECT"
        required
        onChange={subjectHandler}
        value={senderSubject}
      />
      <textarea
        type="text"
        rows={6}
        className="w-full bg-white/10 rounded-3xl px-6 py-4 col-span-2 outline-none focus:outline-1 focus:outline-yellow-500"
        placeholder="YOUR MESSAGE"
        required
        onChange={messageHandler}
        value={senderMessage}
      />
      <Button type={"submit"} text={"SEND MESSAGE"} />
    </form>
  );
}

export default ContactForm;
