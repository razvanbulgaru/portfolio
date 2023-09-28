import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			id="contact"
			className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			ref={ref}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>contact me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{' '}
				<a className="underline" href="mailto:razvan.bulgaru@gmail.com">
					razvan.bulgaru@gmail.com
				</a>{' '}
				or through this form.
			</p>

			<form className="mt-10 flex flex-col">
				<input
					type="email"
					className="h-14 rounded-lg borderBlack px-4"
					placeholder="Your email"
				/>
				<textarea
					className="borderBlack h-52 my-3 rounded-lg p-4"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full flex items-center justify-center gap-2 self-center outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
				>
					Submit{' '}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</motion.section>
	);
};

export default Contact;
