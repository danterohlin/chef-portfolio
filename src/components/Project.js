import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-2xl sm:text-4xl sm:pb-5 text-gray-700 flex justify-center poppins">
          Projects
        </h1>
        <h2 className="text-lg text-gray-700 flex justify-center mb-12">
          Welcome to my projects page
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                className="relative rounded-lg shadow-xl bg-white p-6 sm:p-16 hover:scale-105 transform transition duration-300"
                key={index}
              >
                <h3 className="text-gray-800 poppins text-xl sm:text-3xl font-bold mb-2 hover:text-gray-500">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <strong className="font-bold">Place</strong>: {project.place}
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-base sm:text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
