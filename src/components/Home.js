import React from "react";
import image from "../portfolio.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background"
        className="absolute object-cover w-full h-full"
      ></img>
      <section className="relative flex justify-center min-h-screen ph-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-700 font-bold poppins leading-none lg:leading-snug home-name">
          Aloha, I'm Ash.
        </h1>
      </section>
    </main>
  );
}
