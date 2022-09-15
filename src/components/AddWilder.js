import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddWilder = () => {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				axios.post('http://localhost:5000/api/wilders', { name, city });
			}}
		>
			<label>Name:</label>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<br />
			<label>City:</label>
			<input type="text" value={city} onChange={e => setCity(e.target.value)} />
			<br />
			<button>Add Wilder</button>
		</form>
	);
};

export default AddWilder;
