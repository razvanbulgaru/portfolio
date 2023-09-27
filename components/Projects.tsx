'use client';
import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useActiveSectionContext } from '@/context/ActiveSection';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActive, timeOfLClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLClick > 1000) {
			setActive('Projects');
		}
	}, [inView, setActive, timeOfLClick]);

	return (
		<section className="scroll-mt-28" id="projects" ref={ref}>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;
