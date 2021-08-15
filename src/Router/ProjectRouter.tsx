import { Route, Switch } from 'react-router-dom';
import { ReactFlowProvider } from 'react-flow-renderer';
import React, { FC } from 'react';
import ProjectEditor from '../Pages/ProjectEditor';
import ProjectConfig from '../Pages/ProjectConfig';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import { DynamicPath } from '../pagePathName';
import ProjectShare from '../components/project/ProjectShare';
import NotFound from '../Pages/NotFound';

const ProjectRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<ReactFlowProvider>
					<Route path={DynamicPath.PROJECT} exact component={ProjectEditor} />
					<Route path={DynamicPath.PROJECT_CONFIG} exact component={ProjectConfig} />
				</ReactFlowProvider>
				<Route component={NotFound} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default ProjectRouter;
