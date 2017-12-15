import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {userLoggedIn} from "./actions/login";
import "semantic-ui-css/semantic.min.css";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thuck from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thuck))
);

if(localStorage.happy98JWT){
	const user = {token: localStorage.happy98JWT};
	store.dispatch(userLoggedIn(user));
}
ReactDOM.render(<BrowserRouter>
	<Provider store={store}>
		<App />
	</Provider>
	</BrowserRouter>, 
	document.getElementById('root'));
registerServiceWorker();
