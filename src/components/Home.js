import React from "react";
import { Link } from "react-router-dom";
import video from "../video-hero.mp4";
import Carousel from "./Carousel";

export default function Home() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
<<<<<<< HEAD
    <main className="min-h-screen relative bg-gray-50">
      <video
        className="hero object-cover"
=======
    <main className="min-h-screen bg-gray-100">
      <video
        className="h-96 absolute object-cover video-bg"
>>>>>>> 1694d4c264b6fbc7e1ed5dc2589e50486588cde5
        width="100%"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      
      </video>
<<<<<<< HEAD
      <section className="absolute top-40 left-1/2 transform -translate-x-1/2 flex justify-center ph-12 py-32 px-12">
        <Link to="/contact">
          <h1 className="text-white whitespace-nowrap font-bold poppins leading-none leading-snug text-2xl sm:text-2xl bg-black bg-opacity-60 px-12 py-4 hover:bg-opacity-100 transition duration-500 hover:bg-green-400 hover:scale-105 transform">
            Contact me
          </h1>
        </Link>
      </section>
      <section className="p-10 lg:p-20 p-0 xl:w-2/4 w-5/7 mx-auto">
        <h2 className="mb-4 text-xl poppins px-4">Chef Steven Miller</h2>
        <p className="mx-8">
          Experienced and passionate chef with experience in various restaurant
          and company settings, striving to serve the best food possible.
          Recognized as a visionary chef with knowledge of food trends and the
          ability to think outside the box when it comes to the creation of a
          menu. Bringing forth an in depth knowledge of flavors and food
          relationships, resulting in mouth watering dishes and attractive
          menus.
=======
      <section className="flex relative justify-center h-96 items-center px-8">
        <Link to="/contact">
          <h1 className="text-white font-bold poppins leading-none leading-snug text-2xl sm:text-4xl md:text-4xl bg-green-800 bg-opacity-80 p-5 sm:p-5 hover:bg-opacity-90 hover:scale-105 transform transition duration-400">
            Hire me
          </h1>
        </Link>
      </section>
      <section className="p-10 md:p-20 lg:w-2/4 mx-auto">
        <hr className="border-gray-400 my-10" />
        <p className="sm:mx-8 text-gray-700">
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
>>>>>>> 1694d4c264b6fbc7e1ed5dc2589e50486588cde5
        </p>
        <hr className="border-gray-400 my-10" />
        <Carousel slides={slides} />
      </section>
    </main>
  );
}
