import React from 'react';
import App from '../pages/App';
import Targets from '../pages/Targets';
import Jobs from '../pages/Jobs';
import Networks from '../pages/Networks';

const routes = [
	{
		Component: Networks,
		key: 'Networks',
		path: '/networks'
	},
	{
		Component: Jobs,
		key: 'Jobs',
		path: '/jobs'
	},
	{
		Component: Targets,
		key: 'Targets',
		path: '/targets'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
