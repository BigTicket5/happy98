import React from 'react';
import {Form,Input} from "semantic-ui-react";
import PropTypes from 'prop-types';

class PropertyForm extends React.Component{
    constructor(){
        super();
        this.state={
            rentalproperty:[]
        }
    }
    componentDidMount(){
		this.props.init().then(rentprop=>{
            if(rentprop!==undefined){
                this.setState({rentalproperty:rentprop});
            }
		})
    };
    render(){
        return(
            <div></div>
        );
    }
}

PropertyForm.propTypes = {
    init:PropTypes.func.isRequired
}
export default PropertyForm;