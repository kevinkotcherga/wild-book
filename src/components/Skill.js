import React from 'react';
import styles from './Skill.module.css';

const Skill = props => {
	return (
		<li>
			{props.name}
			<span className={styles.votes}>4</span>
		</li>
	);
};

export default Skill;
