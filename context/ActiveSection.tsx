'use client';
import { links } from '@/lib/data';
import React, { createContext, useContext, useState } from 'react';

type SectionName = (typeof links)[number]['name'];
type ActiveSectionProps = {
	children: React.ReactNode;
};
type TActiveSectionContext = {
	active: SectionName;
	setActive: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<TActiveSectionContext | null>(null);

const ActiveSectionContextProvider = ({ children }: ActiveSectionProps) => {
	const [active, setActive] = useState<SectionName>('Home');

	return (
		<ActiveSectionContext.Provider value={{ active, setActive }}>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export const useActiveSectionContext = () => {
	const ctx = useContext(ActiveSectionContext);

	if (ctx === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		);
	}

	return ctx;
};

export default ActiveSectionContextProvider;
