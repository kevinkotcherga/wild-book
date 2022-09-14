import React from 'react';
import styles from './Skill.module.css';

const Skill = props => {
	return (
		<li>
			{props.title}
			<span className={styles.votes}>{props.votes}</span>
		</li>
	);
};

export default Skill;
