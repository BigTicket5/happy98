import React from 'react';
import {Form,Input,Grid} from "semantic-ui-react";
import PropTypes from 'prop-types';
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
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
        const { value } = this.state;
        return(
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column  width={5}>
                        <Form>
                            <Form.Field inline>
                                <label>Owner Name</label>
                                <Input placeholder='Owner Name' />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Address</label>
                                <Input placeholder='Address' />
                            </Form.Field>
                            <Form.Field inline>
                                <label>Fee</label>
                                <Input placeholder='Rent fee' />
                                <label>Fee</label>
                                <Input placeholder='Rent fee' />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

PropertyForm.propTypes = {
    init:PropTypes.func.isRequired
}
export default PropertyForm;