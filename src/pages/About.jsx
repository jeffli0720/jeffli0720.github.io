import styles from "../css/About.module.css";
import avatar from "../img/avatar.png";

function About() {
	return (
		<>
			<h2 className={styles.header}>Wait... who is this guy?</h2>
			<div className="mobile-bio">
				<img src={avatar} alt="Avatar" />
				<div>
					<p className="font-medium">Hi 👋, I'm</p>
					<p className="font-large">Jeff Li</p>
				</div>
			</div>
			<div className={styles.bio}>
				<p>I'm a young self-taught developer and designer with two years experience and an eye for quality. I make web applications that scale beautifully and work seamlessly.</p>
				<p>I'm proficient in <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React JS</a>, <a target="_blank" rel="noreferrer" href="https://www.python.org/">Python</a>, <a target="_blank" rel="noreferrer" href="https://www.javascript.com/">Javascript</a>, <a target="_blank" rel="noreferrer" href="https://html.com/">HTML/CSS</a>, <a target="_blank" rel="noreferrer" href="https://www.java.com/">Java</a>, <a target="_blank" rel="noreferrer" href="https://www.figma.com/">Figma</a>, and more.</p>
			</div>
		</>
	)
}

export default About;
