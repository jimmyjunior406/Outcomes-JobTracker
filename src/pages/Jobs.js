import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
		} finally {
			window.location.assign('/Jobs');
		}
	};
	return (
		<div>
			<div class="title1">
				<h1>Job Applications</h1>
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
			</div>

			<div class="flexbox-container1">
				{jobs.map(job => {
					return (
						<div class="flexbox-2" key={job._id}>
							<h4>{job.companyName}</h4>
							<h6>Date Applied: {job.dateApplied}</h6>
							<h6>Contact Name: {job.contactName}</h6>
							<h6>Notes: {job.notes}</h6>
							<Link to={`/${job._id}/jobEdit`}>
								<button className="Button" type="button">
									Update Job
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
