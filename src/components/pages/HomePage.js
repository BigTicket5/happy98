import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/logout";
import Sidebar from '../Sidebar/Sidebar';
import  './../../resource/css/style.css';
const HomePage=({ isAuthenticated ,logout})=>(

<div className="">
	<div className="header">
			{isAuthenticated? (<button onClick={()=>logout()}>Logout</button>):(<Link to="/login">Login</Link>)}
	</div>
	<div>
		<div className="nav">
        <Sidebar/>
		</div>
		<div className="content-inner"></div>
	</div>
	<div className="footer">
		
	</div>
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