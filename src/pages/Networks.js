import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export default function Networks(props) {
	const [networks, setNetworks] = useState([]);
	const contactNameInput = useRef(null);
	const companyNameInput = useRef(null);
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
		const contactNameValue = contactNameInput.current.value;
		const companyNameValue = companyNameInput.current.value;
		const notesValue = notesInput.current.value;
		try {
			const response = await fetch('/api/networks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					companyName: companyNameValue,
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
		<div>
			<div class="title1">
				<h1>Networks and Connections</h1>
				<div id="button">
					<Link to="/App">
						<button className="Button" type="button">
							Home
						</button>
					</Link>
				</div>
				<div class="form">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							ref={contactNameInput}
							placeholder="Contact Name"
						/>
						<br />
						<input
							type="text"
							ref={companyNameInput}
							placeholder="Company Name"
						/>
						<br />
						<input type="text" ref={notesInput} placeholder="Notes" />
						<br />
						<input type="submit" value="Add Network/Connection" />
					</form>
				</div>
			</div>

			<div class="flexbox-container1">
				{networks.map(network => {
					return (
						<div class="flexbox-item flexbox-2">
							<h4>{network.contactName}</h4>
							<h6>{network.companyName}</h6>
							<h6>{network.notes}</h6>
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
