import React from 'react';
import PayForm from '../forms/PayForm';
import {initrent} from '../../actions/init';
import {saveRecords} from '../../actions/save';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from "react-router-dom";
import {logout} from "../../actions/logout";
class SubBillingPage extends React.Component{
	init=()=>this.props.initrent();
	submit=data=>this.props.saveRecords(data).then(()=>this.props.history.push("/details"));
	lout=()=>this.props.logout();
	render(){
		return (
			<div className="wrapper">
				<div className="header">
					{this.props.isAuthenticated? (<button onClick={this.lout}>Logout</button>):(<Link to="/login">Login</Link>)}
				</div>
				<div className="wrapper_content">
					<div className="nav">
					<Sidebar/>
					</div>
					<div className="content-inner">
						<PayForm init={this.init} submit = {this.submit} />
					</div>
				</div>
				<div className="footer">Copy Right@2018</div>
			</div>
		);
	}
}

function mapStateProps(state){
	return{
		isAuthenticated:!!state.user.token
	};
}

SubBillingPage.propTypes = {
	history:PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	initrent: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	saveRecords: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
}
export default connect(mapStateProps,{initrent,saveRecords,logout})(SubBillingPage);
