import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<div className="grid lg:grid-cols-3 gap-10">
				<div className="lg:col-span-2">
					<motion.div variants={textVariant()}>
						<p className={styles.sectionSubText}>Introduction</p>
						<h2 className={styles.sectionHeadText}>Overview.</h2>
					</motion.div>

					<motion.p
						variants={fadeIn("", "", 0.1, 1)}
						className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
					>
						I'm a skilled software developer with experience in TypeScript and
						JavaScript, and expertise in frameworks like React, Node.js, and
						Three.js. I'm a quick learner and collaborate closely with clients to
						create efficient, scalable, and user-friendly solutions that solve
						real-world problems. Let's work together to bring your ideas to life!
					</motion.p>
					<div>
						<a href="/resume (2).pdf" download="resume.pdf"><button
							className='bg-tertiary my-5 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
						>Get Resume</button></a>

						<div className='flex gap-5 mt-2 justify-start'>
							<a href='https://www.facebook.com/AsadMohammadRayat/' target="_blank" className='text-5xl font-bold mb-10'  ><AiOutlineFacebook /></a>
							<a target="_blank" className='text-5xl font-bold mb-10' href='https://www.linkedin.com/in/asad-rayat/'><div ><AiOutlineLinkedin></AiOutlineLinkedin></div></a>
							<a target="_blank" className='text-5xl font-bold mb-10' href='https://www.instagram.com/asad_rayat/'><div ><AiOutlineInstagram></AiOutlineInstagram></div></a>
						</div>
					</div>
				</div>

				<Tilt className='w-full'>
					<motion.div
						variants={fadeIn("right", "spring")}
						className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
					>
						<div
							options={{
								max: 45,
								scale: 1,
								speed: 450,
							}}
							className='bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col'
						>
							<img
								src="https://i.ibb.co/pRN4kZd/Rayat-Avatar.png"
								alt='web-development'
								className='w-full object-contain'
							/>
						</div>
					</motion.div>
				</Tilt>
			</div>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");