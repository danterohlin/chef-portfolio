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
      <section className="relative flex justify-center min-h-screen ph-12 pt-64 px-8">
        <h1 className="text-gray-700 font-bold poppins leading-none leading-snug text-3xl sm:text-6xl">
          Aloha.
        </h1>
      </section>
    </main>
  );
}
