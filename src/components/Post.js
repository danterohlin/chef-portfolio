import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Container from "./Container.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  const fetchData = async (query) => {
    try {
      const data = await sanityClient.fetch(query);
      if (data) {
        setPost(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const query = `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`;

    fetchData(query);
  }, []);

  return (
    <div id="recipies" className="bg-black bg-opacity-90 pt-20 min-h-screen">
      <Container>
        <h1 className="text-2xl sm:text-4xl sm:pb-5 text-gray-100 flex justify-center poppins">
          Recipies
        </h1>
        <h2 className="text-lg text-gray-400 flex justify-center mb-12">
          My Recipe Page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData ? (
            postData.map((post, index) => (
              <article
                key={post.slug.current}
                className="shadow-xl hover:scale-105 transform transition duration-300"
              >
                <Link to={"/post/" + post.slug.current}>
                  <span
                    className="block h-64 relative rounded-lg shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-lg object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))
          ) : (
            <div className="ml-10">Loading..</div>
          )}
        </div>
      </Container>
    </div>
  );
}
