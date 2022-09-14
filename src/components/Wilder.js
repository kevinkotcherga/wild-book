import React from 'react';
import blank_profile from './../assets/8bRN5ga.png';
import Skill from './Skill';
import styles from './Wilder.module.css';

const Wilder = props => {
	return (
		<article className={styles.card}>
			<img src={blank_profile} alt="Jane Doe Profile" />
			<h3>{props.name}</h3>
			<h4>{props.city}</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<h4>Wild Skills</h4>
			<ul className={styles.skills}>
				{props.skills.map(skill => (
					<Skill title={skill.title} votes={skill.votes} />
				))}
			</ul>
		</article>
	);
};

export default Wilder;
