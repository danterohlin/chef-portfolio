import React from "react";
import image from "../portfolio.jpg";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <img
        src={image}
        alt="Background"
        className="absolute h-80 w-full object-cover"
      ></img>
      <section className="relative flex justify-center ph-12 py-32 px-8">
        <h1 className="text-gray-700 font-bold poppins leading-none leading-snug text-3xl sm:text-6xl">
          Aloha.
        </h1>
      </section>
      <section className="p-20 sm:w-2/4 mx-auto">
        <p>
          I am Steven Miller, and I am looking for a job in Customer Services. I
          have 10 years of experience in related job positions. I started
          working as a Customer Care Agent in a call center gradually moving to
          a Customer Experience Analyst. I am a team player. I am outgoing,
          dedicated, and open-minded. I get across to people and adjust to
          changes with ease. I believe that a person should work on developing
          their professional skills and learning new things all the time.
          Currently, I am looking for new career opportunities my current job
          position cannot provide. I have enough experience to occupy a managing
          position and I will be glad to work on increasing the customer loyalty
          rate of your company.
        </p>
      </section>
    </main>
  );
}
