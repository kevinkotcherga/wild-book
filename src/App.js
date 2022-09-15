import { useEffect, useState } from 'react';
import './App.css';
import Wilder from './components/Wilder';
import axios from 'axios';
import AddWilder from './components/AddWilder';

function App() {
	const [wilders, setWilders] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const wilders = await axios.get('http://localhost:5000/api/wilders');
			console.log(wilders.data);
			setWilders(wilders.data);
		};
		fetchData();
	}, []);

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
					{wilders.map(wilder => (
						<Wilder
							name={wilder.name}
							city={wilder.city}
							skills={wilder.skills}
							key={wilder.id}
						/>
					))}
				</section>
			</main>
			<AddWilder />
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
