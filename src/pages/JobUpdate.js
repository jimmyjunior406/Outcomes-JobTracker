import React, { useState, useEffect, useRef } from 'react';

export default function JobUpdate(props) {
	const [job, setJob] = useState({
		companyName: '',
		dateApplied: '',
		contactName: '',
		notes: ''
	});

	const [jobDelete, setJobDelete] = useState(false);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
	const contactNameInput = useRef(null);
	const notesInput = useRef(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/jobs/${props.match.params.id}`);
				const data = await response.json();
				setJob(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [job, jobDelete]);
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/jobs/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setJobDelete(!jobDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/Jobs');
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/jobs/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					companyName: companyNameInput.current.value,
					dateApplied: dateAppliedInput.current.value,
					contactName: contactNameInput.current.value,
					notes: notesInput.current.value
				})
			});
			const data = await response.json();
			setJob(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/Jobs');
		}
	};

	return (
		<div class="flexbox-1">
			<h4>{job.companyName ? job.companyName : ''}</h4>
			<h4>{job.dateApplied ? job.dateApplied : ''}</h4>
			<h4>{job.contactName ? job.contactName : ''}</h4>
			<h4>{job.notes ? job.notes : ''}</h4>
			<button onClick={handleDelete}>Delete this Job</button> <br />
			<form class="flexbox-2" onSubmit={handleSubmit}>
				<input
					type="text"
					ref={companyNameInput}
					defaultValue={job.companyName}
				/>
				<br />
				<input
					type="text"
					ref={dateAppliedInput}
					defaultValue={job.dateApplied}
				/>
				<br />
				<input
					type="text"
					ref={contactNameInput}
					defaultValue={job.contactName}
				/>
				<br />
				<input type="text" ref={notesInput} defaultValue={job.notes} />
				<input type="submit" value="Update Job" />
			</form>
		</div>
	);
}
