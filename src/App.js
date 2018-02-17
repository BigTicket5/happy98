import React from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SubBilling from './components/pages/SubBillingPage';
import MainPage from './components/pages/MainPage';
const App =()=>(
	<BrowserRouter>
    	<div>
	    	<Switch>
	    		<Route path="/home" component={HomePage}></Route>
			    <Route path="/sub_billing" component ={SubBilling}></Route>
			    <Route path='/login' component={LoginPage} />
			</Switch>
    	</div>
    </BrowserRouter>
);

export default App;
