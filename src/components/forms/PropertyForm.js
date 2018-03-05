import React from 'react';
import {Form,Input,Grid} from "semantic-ui-react";
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
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid>
                <div>
                    <Input label='Owner' placeholder='mysite.com'/>
                </div>
                <div>
                    <Input label='Address' placeholder='Franklin Street'/>
                </div>
            </Grid>
        );
    }
}

PropertyForm.propTypes = {
    init:PropTypes.func.isRequired
}
export default PropertyForm;