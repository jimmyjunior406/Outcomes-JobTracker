import React from 'react';
import App from '../pages/App';
import Targets from '../pages/Targets';
import Jobs from '../pages/Jobs';
import Networks from '../pages/Networks';
import JobUpdate from '../pages/JobUpdate';
import NetworkUpdate from '../pages/NetworkUpdate';
import TargetUpdate from '../pages/TargetUpdate';

const routes = [
	{
		Component: NetworkUpdate,
		key: 'NetworkUpdate',
		path: '/:id/networkEdit'
	},
	{
		Component: TargetUpdate,
		key: 'TargetUpdate',
		path: '/:id/targetEdit'
	},
	{
		Component: JobUpdate,
		key: 'JobUpdate',
		path: '/:id/jobEdit'
	},

	{
		Component: Networks,
		key: 'Networks',
		path: '/networks'
	},
	{
		Component: Targets,
		key: 'Targets',
		path: '/targets'
	},
	{
		Component: Jobs,
		key: 'Jobs',
		path: '/jobs'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
