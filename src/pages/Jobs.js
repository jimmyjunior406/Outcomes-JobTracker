import React, { useEffect, useState, useRef } from 'react';

export default function Jobs(props) {
	const [jobs, setJobs] = useState([]);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
	const contactNameInput = useRef(null);
	const notesInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/jobs');
				const data = await response.json();
				setJobs(data);
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
			const response = await fetch('/api/jobs', {
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
			setJobs([...jobs, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Input">
			<h1>Jobs Applied To</h1>

			<div>
				{jobs.map(job => {
					return (
						<div>
							<h2>{job.companyName}</h2>
							<h2>{job.dateApplied}</h2>
							<h2>{job.contactName}</h2>
							<h2>{job.notes}</h2>
						</div>
					);
				})}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						ref={contactNameInput}
						placeholder="Contact Name"
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
					<input type="submit" value="Add New Job Applied" />
				</form>
			</div>
		</div>
	);
}
