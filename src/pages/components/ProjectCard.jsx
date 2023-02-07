import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
	return (
		<>
			<li className={styles.card}>
                <p><a className={styles.link} href={props.link} target="_blank">{props.name}</a>, {props.description}</p>
            </li>
		</>
	)
}

export default ProjectCard;
