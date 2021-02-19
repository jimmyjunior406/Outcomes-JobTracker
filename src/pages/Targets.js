import { DocumentProvider } from 'mongoose';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Targets(props) {
	const [targets, setTargets] = useState([]);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
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
		const dateAppliedValue = dateAppliedInput.current.value;
		const contactNameValue = contactNameInput.current.value;
		const notesValue = notesInput.current.value;
		try {
			const response = await fetch('/api/targets', {
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
			setTargets([...targets, data]);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/Targets');
		}
	};
	return (
		<div class="flexbox-container">
			<div class="title">
				<h1>Target Companies</h1>
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
					<input type="text" ref={contactNameInput} placeholder="Contact Nme" />
					<br />
					<input type="text" ref={notesInput} placeholder="Notes" />
					<br />
					<input type="submit" value="Add New Target" />
				</form>
			</div>

			{targets.map(target => {
				return (
					<div class="flexbox-item flexbox-2">
						<div key={target._id}>
							<h4>{target.companyName}</h4>
							<h6>Contact Name: {target.contactName}</h6>
							<h6>Notes: {target.notes}</h6>
							<Link to={`/${target._id}/targetEdit`}>
								<button className="Button" type="button">
									Update Target
								</button>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}
