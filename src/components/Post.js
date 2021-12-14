import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

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
    <main className="bg-gray-50 pt-60 min-h-screen p-12">
      <section className="container w-3/5 mx-auto">
        <h1 className="text-2xl sm:text-4xl sm:pb-5 text-gray-700 flex justify-center poppins">
          Recipies
        </h1>
        <h2 className="text-lg text-gray-700 flex justify-center mb-12">
          Welcome to my recipe page
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
      </section>
    </main>
  );
}
