import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../actions/logout";
import Sidebar from '../Sidebar/Sidebar';
import  './../../resource/css/style.css';
const HomePage=({ isAuthenticated ,logout,uRole})=>(

<div className="">
	<div className="header">
			{isAuthenticated? (<button onClick={()=>logout()}>Logout</button>):(<Link to="/login">Login</Link>)}
	</div>
	<div>
		<div className="nav">
        	<Sidebar role = {uRole}/>
		</div>
		<div className="content-inner"></div>
	</div>
	<div className="footer">
		
	</div>
</div>
);


HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	uRole: PropTypes.object.isRequired
};

function mapStateProps(state){
	return{
		isAuthenticated:!!state.user.token,
		uRole:state.user.role,
	};
}
export default connect(mapStateProps,{logout:logout})(HomePage);