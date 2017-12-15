import React from 'react';
import PayForm from '../forms/PayForm';
import {initrent} from '../../actions/init';
import {saveRecords} from '../../actions/save';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
class SubBillingPage extends React.Component{
	init=()=>this.props.initrent();
	submit=data=>this.props.saveRecords(data).then(()=>this.props.history.push("/details"));
	render(){
		return (
			<div>
				<Sidebar/>
				<PayForm init={this.init} submit = {this.submit} />
			</div>
		);
	}
}

SubBillingPage.propTypes = {
	history:PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	initrent: PropTypes.func.isRequired,
	saveRecords: PropTypes.func.isRequired
}
export default connect(null,{initrent,saveRecords})(SubBillingPage);
