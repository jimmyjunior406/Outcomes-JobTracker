import React, { useState, useEffect, useRef } from 'react';

export default function TargetUpdate(props) {
	const [target, setTarget] = useState({
		companyName: '',
		dateApplied: '',
		contactName: '',
		notes: ''
	});

	const [targetDelete, setTargetDelete] = useState(false);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
	const contactNameInput = useRef(null);
	const notesInput = useRef(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/targets/${props.match.params.id}`);
				const data = await response.json();
				setTarget(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [target, targetDelete]);
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/targets/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setTargetDelete(!targetDelete);
		} catch (errror) {
			console.error(error);
		} finally {
			window.location.assign('/Targets');
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/targets/${props.match.params.id}`, {
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
			setTarget(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign(`/Targets`);
		}
	};

	return (
		<div class="flexbox-1">
			<h4>{target.companyName ? target.companyName : ''}</h4>
			<h4>{target.dateApplied ? target.dateApplied : ''}</h4>
			<h4>{target.contactName ? target.contactName : ''}</h4>
			<h4>{target.notes ? target.notes : ''}</h4>
			<button onClick={handleDelete}>Delete this Target Company</button> <br />
			<form class="flexbox-2" onSubmit={handleSubmit}>
				<input
					type="text"
					ref={companyNameInput}
					defaultValue={target.companyName}
				/>
				<br />
				<input
					type="text"
					ref={dateAppliedInput}
					defaultValue={target.dateApplied}
				/>
				<br />
				<input
					type="text"
					ref={contactNameInput}
					defaultValue={target.contactName}
				/>
				<br />
				<input type="text" ref={notesInput} defaultValue={target.notes} />
				<input type="submit" value="Update Target Companies" />
			</form>
		</div>
	);
}
