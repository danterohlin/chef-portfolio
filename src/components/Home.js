import React from "react";
import video from "../media/video-hero.mp4";
import Carousel from "./Carousel";
import Container from "./Container";
import { Link as LinkScroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Post from "./Post";
import Contact from "./Contact";

export default function Home() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <main
      className="min-h-screen w-screen relative bg-black bg-opacity-90"
      id="main"
    >
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60"></div>
        <video
          className="hero object-cover"
          width="100%"
          playsInline
          autoPlay
          muted
          loop
          poster="../media/poster.jpg"
          autobuffer="true"
        >
          <source src={video} type="video/webm" />
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-x-2/4">
          <h2 className="text-white animated__header__titles text-6xl font-bold -mt-10">
            Chef Steven Miller
          </h2>
          <h2
            id="animated__second__title"
            className="text-white animated__header__titles text-6xl text-center font-bold -mt-24"
          >
            Enthusiastic chef that <br /> brings the best from <br /> a big
            variety of cuisines
          </h2>
        </div>
        <div className="absolute bottom-20 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
          <LinkScroll
            to="about__me"
            className=""
            smooth={true}
            duration={1000}
            offset={isMobile ? -50 : 0}
          >
            <h1 className="text-white mb-4 cursor-pointer bg-green-400 m-auto whitespace-nowrap poppins text-center leading-none leading-snug text-xl sm:text-xl bg-opacity-80 px-12 py-4 hover:bg-opacity-100 border border-green-400 hover:border-green-400  transition duration-600 hover:bg-black hover:text-white hover:scale-105 transform">
              About Me
            </h1>
          </LinkScroll>
        </div>
      </div>

      <Container>
        <section
          id="about__me"
          className="flex justify-center items-center h-screen"
        >
          <div className="bg-black text-yellow-50 xl:w-3/5 bg-opacity-70 lg:p-6">
            <h2 className="mb-8 mt-4 text-xl poppins mx-6 text-gray-50">
              Chef Steven Miller
            </h2>
            <p className="mx-4">
              <div className="flex items-center mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-green-300 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Experienced and passionate chef with experience in various
                restaurant and company settings, striving to serve the best food
                possible.
              </div>
              <div className="flex items-center mb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-green-300 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Recognized as a visionary chef with knowledge of food trends and
                the ability to think outside the box when it comes to the
                creation of a menu.
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-green-300 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Bringing forth an in depth knowledge of flavors and food
                relationships, resulting in mouth watering dishes and attractive
                menus.
              </div>
            </p>

            <div className="pt-6 m-auto">
              <LinkScroll
                to="recipies"
                smooth={true}
                duration={1000}
                offset={0}
              >
                <h1 className="text-white w-5/6 mb-4 cursor-pointer text-green-200 hover:text-black m-auto whitespace-nowrap poppins text-center leading-none leading-snug text-xl sm:text-xl bg-opacity-80 px-12 py-4 hover:bg-opacity-100 transition duration-500 hover:bg-green-400 hover:scale-105 transform">
                  Show me more!
                </h1>
              </LinkScroll>
            </div>
          </div>
        </section>
      </Container>
      <Post id="recipies" />
      <Container>
        <section className="mt-96" id="slide">
          {/* <hr className="border-black my-10" /> */}
          <Carousel slides={slides} />
        </section>
      </Container>
      <Contact />
    </main>
  );
}
