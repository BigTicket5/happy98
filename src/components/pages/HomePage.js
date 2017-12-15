import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/logout";
import Sidebar from '../Sidebar/Sidebar';
const HomePage=({ isAuthenticated ,logout})=>(

	<div className="ui container">
		<h1>Home Page</h1>
		{isAuthenticated? (<button onClick={()=>logout()}>Logout</button>):(<Link to="/login">Login</Link>)}
		<Sidebar/>
	</div>
);


HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired 
};

function mapStateProps(state){
	return{
		isAuthenticated:!!state.user.token
	};
}
export default connect(mapStateProps,{logout:logout})(HomePage);