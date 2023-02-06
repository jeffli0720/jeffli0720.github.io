import styles from "../css/Projects.module.css";
import ProjectCard from "./components/ProjectCard";

function Projects() {
	return (
		<>
			<h2 className={styles.header}>What has Jeff been up to?</h2>
            <p>All kinds of things! Check out some of my recent projects!</p>
            <div className={styles.cardsWrapper}>
                <ProjectCard />
            </div>
		</>
	)
}

export default Projects;