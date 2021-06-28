import React from "react";

export default function Contact() {
  return (
    <main className="relative bg-gray-50 min-h-screen">
      <header className="flex justify-center items-center h-40 bg-gray-50">
        <h1 className="text-4xl poppins text-gray-700">Contact me!</h1>
      </header>
      <form className="flex flex-col w-3/4 sm:w-2/4 m-auto">
        <label>Name (required)</label>
        <input type="text" />
        <label>Email (required)</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Your Message</label>
        <textarea type="text" rows="6" />
        <button className="bg-yellow-400 h-10 w-20 my-5 text-white poppins tracking-widest border-2 border-yellow-400 hover:bg-gray-50 hover:text-yellow-400 transform transition duration-500">
          <p className="">SEND</p>
        </button>
      </form>
    </main>
  );
}
