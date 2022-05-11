import React, { useEffect, useState, useLayoutEffect } from "react";
import sanityClient from "../client.js";
import Container from "./Container.js";

export default function Tutorial() {
	const [projectData, setProjectData] = useState(null);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'tutorial']{
            title,
            date,
            place,
            description,
            tutorialType,
            link,
            tags
        }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<main id="main" className="bg-black bg-opacity-90 pt-20 min-h-screen">
			<Container>
				<h1 className="text-2xl sm:text-4xl sm:pb-5 text-gray-100 flex justify-center poppins">
					Lessons
				</h1>
				<h2 className="text-lg text-gray-400 flex justify-center mb-12">
					My Lesson Page
				</h2>
				<section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article
								className="relative rounded-lg shadow-xl bg-white p-2 sm:p-6"
								key={index}
							>
								<h3 className="text-gray-800 poppins text-xl sm:text-2xl font-medium mb-2 hover:text-gray-500">
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
										{project.tutorialType.charAt(0).toUpperCase() +
											project.tutorialType.slice(1)}
									</span>
									<p className="my-6 text-lg text-gray-700 leading-relaxed">
										{project.description}
									</p>
									<a
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
										className="text-red-500 font-bold hover:text-red-400 text-base sm:text-xl"
									>
										View the video
										<span role="img" aria-label="right pointer" className="ml-2"></span>
									</a>
								</div>
							</article>
						))}
				</section>
			</Container>
		</main>
	);
}
