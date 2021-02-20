import React, { useState, useEffect, useRef } from 'react';

export default function NetworkUpdate(props) {
	const [network, setNetwork] = useState({
		companyName: '',
		dateApplied: '',
		contactName: '',
		notes: ''
	});

	const [networkDelete, setNetworkDelete] = useState(false);
	const companyNameInput = useRef(null);
	const dateAppliedInput = useRef(null);
	const contactNameInput = useRef(null);
	const notesInput = useRef(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/networks/${props.match.params.id}`);
				const data = await response.json();
				setNetwork(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [network, networkDelete]);
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/networks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setNetworkDelete(!networkDelete);
		} catch (errror) {
			console.error(error);
		} finally {
			window.location.assign(`/Networks`);
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/networks/${props.match.params.id}`, {
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
			setNetwork(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign(`/Networks`);
		}
	};

	return (
		<div class="flexbox-container1">
			<div class="flexbox-1">
				<h4>{network.companyName ? network.companyName : ''}</h4>
				<h4>{network.contactName ? network.contactName : ''}</h4>
				<h4>{network.notes ? network.notes : ''}</h4>
				<button onClick={handleDelete}>
					Delete this Network/Connection
				</button>{' '}
				<br />
				<form class="flexbox-1" onSubmit={handleSubmit}>
					<input
						type="text"
						ref={companyNameInput}
						defaultValue={network.companyName}
					/>
					<br />
					<input
						type="text"
						ref={contactNameInput}
						defaultValue={network.contactName}
					/>
					<br />
					<input type="text" ref={notesInput} defaultValue={network.notes} />
					<input type="submit" value="Update Networks" />
				</form>
			</div>
		</div>
	);
}
