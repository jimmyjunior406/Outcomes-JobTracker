import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	return (
		<div>
			<h1>Outcomes Job Tracker</h1>
			<div>
				<Link to="/Jobs">
					<button type="button">Job Applications</button>
				</Link>
			</div>
			<div>
				<Link to="/Networks">
					<button type="button">Networks and Connections</button>
				</Link>
			</div>
			<div>
				<Link to="/Targets">
					<button type="button">Target Companies</button>
				</Link>
			</div>
		</div>
	);
}
