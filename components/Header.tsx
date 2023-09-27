'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed top-0 left-1/2 w-full h-[4.5rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			>
				<motion.nav className="flex items-center justify-center h-12 sm:h-[initial] py-2 sm:py-0">
					<motion.ul className="flex flex-wrap justify-center items-center w-[22rem] gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
						{links.map((link) => {
							return (
								<motion.li
									className="h-3/4 flex items-center justify-center"
									key={link.hash}
								>
									<Link
										className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
										href={link.hash}
									>
										{link.name}
									</Link>
								</motion.li>
							);
						})}
					</motion.ul>
				</motion.nav>
			</motion.div>
		</header>
	);
};
