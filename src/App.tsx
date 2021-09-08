import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ReactFlowProvider } from 'react-flow-nns';
import Authentication from './Authentication';
import ProjectRouter from './Router/ProjectRouter';
import DashBoardRouter from './Router/DashBoardRouter';
import { DynamicPath, StaticPath } from './pagePathName';
import { AssetPage, LandingPage, NotFoundPage, ProfileModifyPage, ProfilePage, SignInPage, SignUpPage } from './Pages';
import ProjectShareRouter from './Router/ProjectShareRouter';

function App() {
	return (
		<BrowserRouter>
			<Authentication>
				<Switch>
					<Route exact path={StaticPath.MAIN} component={LandingPage} />
					<Route exact path={StaticPath.LOGIN} component={SignInPage} />
					<Route exact path={StaticPath.SIGN_UP} component={SignUpPage} />
					<Route exact path={StaticPath.PROFILE} component={ProfilePage} />
					<Route exact path={StaticPath.PROFILE_MODIFY} component={ProfileModifyPage} />
					<Route exact path={StaticPath.ASSET_MAIN} component={AssetPage} />
					<Route path={StaticPath.PROJECT} component={ProjectRouter} />
					<Route path={DynamicPath.PROJECT_SHARE} component={ProjectShareRouter} />
					<Route path={StaticPath.DASHBOARD} component={DashBoardRouter} />
					<Route component={NotFoundPage} />
				</Switch>
			</Authentication>
		</BrowserRouter>
	);
}

export default App;
