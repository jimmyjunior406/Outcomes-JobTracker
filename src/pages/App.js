import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	return (
		<div class="flexbox-container">
			<div class="title">
				<h1>Outcomes Job Tracker</h1>
			</div>
			<div id="button" class="flexbox-itemApp flexbox-app-1">
				<Link to="/Jobs">
					<button className="Button" type="button">
						Job Applications
					</button>
				</Link>
			</div>
			<div id="button" class="flexbox-itemApp flexbox-app-2">
				<Link to="/Networks">
					<button className="Button" type="button">
						Networks and Connections
					</button>
				</Link>
			</div>
			<div id="button" class="flexbox-itemApp flexbox-app-3">
				<Link to="/Targets">
					<button className="Button" type="button">
						Target Companies
					</button>
				</Link>
			</div>
		</div>
	);
}
