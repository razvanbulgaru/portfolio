import { useActiveSectionContext } from '@/context/ActiveSection';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export const useSectionInView = (name: SectionName, threshold: number) => {
	const { ref, inView } = useInView({
		threshold: threshold,
	});
	const { setActive, timeOfLClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLClick > 1000) {
			setActive(name);
		}
	}, [inView, name, setActive, timeOfLClick]);

	return { ref };
};
