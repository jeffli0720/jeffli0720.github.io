import styles from "../css/Projects.module.css";
import ProjectCard from "./components/ProjectCard";

function Projects() {
	return (
		<>
			<h2 className={styles.header}>What has Jeff been up to?</h2>
			<p>All kinds of things! Check out some of my recent projects!</p>
			<ul className={styles.cardsWrapper}>
				<h4>2023</h4>
				<ProjectCard
					name="choobs.app"
					description="a schedule app I built for my high school used daily by my many fellow students to keep track of their schedules."
					link="https://choobs.app"
				/>
				<h4>2022</h4>
				<ProjectCard
					name="ProxiGPT"
					description="an unblocked ChatGPT I developed for my high school making use of the OpenAI API."
					link="https://proxigpt.choobs.repl.co"
				/>
				<ProjectCard
					name="choobs.repl.co"
					description="a Google Classroom clone which hosts unblocked games with about 1,000 daily active users from around the United States."
					link="https://choobs.repl.co"
				/>
			</ul>
		</>
	);
}

export default Projects;
