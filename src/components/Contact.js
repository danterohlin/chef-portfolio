import React from "react";
import Container from "./Container";
import { useLayoutEffect } from "react";

export default function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main id="main" className="bg-green-100 pt-20 min-h-screen">
      <Container>
        <header className="flex justify-center items-center  mb-10">
          <h1 className="text-4xl poppins text-gray-700">Contact me</h1>
        </header>
        <form
          action="https://formsubmit.co/dante.rohlin@gmail.com"
          method="POST"
          className="flex flex-col m-auto"
        >
          <label>Name (required)</label>
          <input type="text" name="name" required />
          <label>Email (required)</label>
          <input type="email" name="email" required />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Your Message</label>
          <textarea type="text" name="message" rows="6" />
          <button className="bg-yellow-400 h-10 w-20 my-5 text-white poppins tracking-widest border-2 border-yellow-400 hover:bg-gray-50 hover:text-yellow-400 transform transition duration-500">
            <p className="">SEND</p>
          </button>
          <input
            type="hidden"
            name="_next"
            value="https://at-portfolio-1.netlify.app/thanks"
          ></input>
        </form>
      </Container>
    </main>
  );
}
