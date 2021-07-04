import React from "react";
import { Link } from "react-router-dom";
import video from "../video-bg.mp4";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <video
        className="h-96 object-cover absolute"
        width="100%"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <section className="relative flex justify-center ph-12 py-32 px-8">
        <Link to="/contact">
          <h1 className="text-green-100 font-bold poppins leading-none leading-snug text-3xl sm:text-5xl bg-green-500 bg-opacity-40 rounded-xl p-7 hover:bg-opacity-60 transition duration-500 hover:bg-green-800 hover:scale-105 transform">
            Hire me
          </h1>
        </Link>
      </section>
      <section className="p-10 pt-20 sm:p-20 sm:w-2/4 mx-auto">
        <hr className="border-gray-400 my-10" />
        <p className="mx-8">
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
        <hr className="border-gray-400 my-10" />
      </section>
    </main>
  );
}
