import React from "react"; 
import Sidebar from '../Sidebar/Sidebar';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {logout} from "../../actions/logout";
import ManageForm from "../forms/ManageForm";
import { Divider } from 'semantic-ui-react';
import {inittenant} from '../../actions/init';
class ManagementPage extends React.Component{
    lout=()=>this.props.logout();
    init=()=>this.props.inittenant();
	render(){
		return (
			<div className="wrapper">
                <div className="header">
					{this.props.isAuthenticated? (<button onClick={this.lout}>Logout</button>):(<Link to="/login">Login</Link>)}
				</div>
                <div className="wrapper_content">
                    <div className="nav">
                        <Sidebar role={this.props.uRole}/>
					</div>
                    <div className="wrapper">
                        <div className="table_frame">
                            <div>
                            </div>
                        </div>
                        <Divider fitted></Divider>
                        <div className="table_frame">
                           <ManageForm init={this.init}/> 
                        </div>
                    </div>
                </div>
                <div className="footer">Copy Right@2018</div>
            </div>
		);
	}
}

function mapStateProps(state){
	return{
		isAuthenticated:!!state.user.token,
		uRole:state.user.role
	};
}

ManagementPage.propTypes = {
    history:PropTypes.shape({
		push: PropTypes.func.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    uRole: PropTypes.string.isRequired,
    inittenant: PropTypes.func.isRequired
}

export default connect(mapStateProps,{logout,inittenant})(ManagementPage);