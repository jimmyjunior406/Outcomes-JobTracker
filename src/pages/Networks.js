import React, { useEffect, useState, useRef } from 'react';

export default function Networks(props) {
	const [networks, setNetworks] = useState([]);
	const nameInput = useRef(null);
	const companyInput = useRef(null);
	const notesInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/networks');
				const data = await response.json();
				setNetworks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const nameValue = nameInput.current.value;
		const companyValue = companyInput.current.value;
		const notesValue = notesInput.current.value;
		try {
			const response = await fetch('/api / networks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameValue,
					company: companyValue,
					notes: notesValue
				})
			});
			const data = await response.json();
			setNetworks([...networks, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Input">
			<h1>Networking and Connections</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" ref={nameInput} placeholder="Name" />
				<br />
				<input type="text" ref={companyInput} placeholder="Company" />
				<br />
				<input type="text" ref={notesInput} placeholder="Notes" />
				<br />
				<input type="submit" value="Add Networks and Connections" />
			</form>
			<div>
				{networks.map(network => {
					return (
						<div>
							<h2>{network.name}</h2>
							<h2>{network.company}</h2>
							<h2>{network.notes}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}
