import React, { useEffect, useState, useRef } from 'react';

export default function Targets(props) {
	const [targets, setTargets] = useState([]);
	const companyNameInput = useRef(null);
	const contactNameInput = useRef(null);
	const notesInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/targets');
				const data = await response.json();
				setTargets(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		const companyNameValue = companyNameInput.current.value;
		const contactNameValue = contactNameInput.current.value;
		const notesValue = notesInput.current.value;
		try {
			const response = await fetch('/api / targets', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					copanyName: companyNameValue,
					contactName: contactNameValue,
					notes: notesValue
				})
			});
			const data = await response.json();
			setTargets([...targets, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Input">
			<h1>Target Companies</h1>
			<form onSubmit={handleSubmit} className="Form">
				<input type="text" ref={companyNameInput} placeholder="Company" />
				<br />
				<input type="text" ref={contactNameInput} placeholder="Name" />
				<br />
				<input type="text" ref={notesInput} placeholder="Notes" />
				<br />
				<input type="submit" value="Add Networks and Connections" />
			</form>
			<div>
				{targets.map(target => {
					return (
						<div>
							<h2>{target.companyName}</h2>
							<h2>{target.contactName}</h2>
							<h2>{target.notes}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}
