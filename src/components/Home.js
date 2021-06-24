import React from "react";
import image from "../background-image.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      ></img>
      <section className="relative flex justify-center min-h-screen ph-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha, I'm Ash.
        </h1>
      </section>
    </main>
  );
}
