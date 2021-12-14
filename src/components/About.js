import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <main className="relative mt-20 bg-gray-50 min-h-screen">
        <section className="container w-3/5 mx-auto">
          <div className="pt-44 ml-10">Loading...</div>
        </section>
      </main>
    );

  return (
<<<<<<< HEAD
    <main className="relative mt-20 bg-gray-50 min-h-screen">
      <section className="container mx-auto bg-green-800 rounded-lg shadow-xl lg:flex p-14">
        <img
          src={urlFor(author.authorImage).url()}
          className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          alt={author.name}
        />
        <div className="text-lg flex flex-col justify-center">
          <h1 className="poppins text-lg sm:text-4xl text-green-300 mb-4">
            Hey there. I'm{" "}
            <span className="text-green-100">{author.name}.</span>
          </h1>
          <div className="prose lg:prose-xl text-white">
            <BlockContent blocks={author.bio} projectId="r07rq1og" />
=======
    <main className="bg-gray-100 min-h-screen">
      <div className="p-10 lg:py-40 container mx-auto">
        <section className="bg-green-800 rounded-lg shadow-xl lg:flex p-6 sm:p-14">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="poppins text-lg sm:text-4xl text-green-300 mt-4 sm:mt-0 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}.</span>
            </h1>
            <div className="prose lg:prose-xl text-gray-200">
              <BlockContent blocks={author.bio} projectId="r07rq1og" />
            </div>
>>>>>>> 1694d4c264b6fbc7e1ed5dc2589e50486588cde5
          </div>
        </div>
      </section>
    </main>
  );
}
