import Intro from '@/components/Intro';
import SectionDevider from '@/components/SectionDevider';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDevider />
		</main>
	);
}
