'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a degree in{' '}
				<span className="font-medium">
					Automation and Applied Computer Science
				</span>
				, I decided to pursue my passion for programming. I enrolled in
				many coding courses and learned{' '}
				<span className="font-medium">full-stack web development</span>.{' '}
				<span className="italic">My favorite part of programming</span>{' '}
				is the problem-solving aspect. I{' '}
				<span className="underline">love</span> the feeling of finally
				figuring out a solution to a problem. My core stack is{' '}
				<span className="font-medium">
					React, Next.js, Node.js, and Sanity
				</span>
				. I am also familiar with TypeScript and C++. I am always
				looking to learn new technologies. I am currently looking for a{' '}
				<span className="font-medium">full-time position</span> as a
				software developer.
			</p>
			<p>
				<span className="italic">When I&apos;m not coding</span>, I
				enjoy playing video games, watching movies, and playing with my
				cat. I also enjoy{' '}
				<span className="font-medium">learning new things</span>. I am
				currently learning about{' '}
				<span className="font-medium">photography and philosophy</span>.
				I&apos;m also learning how to play the guitar.
			</p>
		</motion.section>
	);
};

export default About;
