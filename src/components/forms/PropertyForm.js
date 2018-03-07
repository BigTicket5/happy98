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
                            <Form.Input label="Owner Name" placeholder='Owner Name' width={12} />
                            <Form.Input label="Address" placeholder='Address' width={12}/>
                            <Form.Group>
                                <Form.Input label="Fee" placeholder='Rent fee' width={4}/>
                                <Form.Input label="Type" placeholder='House/Apartment' width={8} />
                            </Form.Group>
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