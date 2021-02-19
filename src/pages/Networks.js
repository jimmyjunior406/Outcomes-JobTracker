import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export default function Networks(props) {
	const [networks, setNetworks] = useState([]);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
	const contactNameInput = useRef(null);
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
		const companyNameValue = companyNameInput.current.value;
		const dateAppliedValue = dateAppliedInput.current.value;
		const contactNameValue = contactNameInput.current.value;
		const notesValue = notesInput.current.value;
		try {
			const response = await fetch('/api/networks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					companyName: companyNameValue,
					dateApplied: dateAppliedValue,
					contactName: contactNameValue,
					notes: notesValue
				})
			});
			const data = await response.json();
			setNetworks([...networks, data]);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/Networks');
		}
	};
	return (
		<div class="flexbox-container">
			<div class="title">
				<h1>Networks and Connections</h1>
				<div id="button">
					<Link to="/App">
						<button className="Button" type="button">
							Home
						</button>
					</Link>
				</div>
			</div>
			<div class="flexbox-item flexbox-1">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						ref={companyNameInput}
						placeholder="Company Name"
					/>
					<br />
					<input
						type="text"
						ref={dateAppliedInput}
						placeholder="Date Applied"
					/>
					<br />
					<input
						type="text"
						ref={contactNameInput}
						placeholder="Contact Name"
					/>
					<br />
					<input type="text" ref={notesInput} placeholder="Notes" />
					<br />
					<input type="submit" value="Add New Job" />
				</form>
			</div>
			<div>
				{networks.map(network => {
					return (
						<div class="flexbox-item flexbox-2">
							<h4>{network.companyName}</h4>
							<h6>Date Applied: {network.dateApplied}</h6>
							<h6>Contact Name: {network.contactName}</h6>
							<h6>Notes: {network.notes}</h6>
							<Link to={`/${network._id}/networkEdit`}>
								<button className="Button" type="button">
									Update Network/Connection
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
