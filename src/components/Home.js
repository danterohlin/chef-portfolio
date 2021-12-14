import React from "react";
import { Link } from "react-router-dom";
import video from "../video-hero.mp4";
import Carousel from "./Carousel";

export default function Home() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className="min-h-screen relative bg-gray-50">
      <video
        className="hero object-cover"
        width="100%"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
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
        </p>
        <hr className="border-gray-400 my-10" />
        <Carousel slides={slides} />
      </section>
    </main>
  );
}
