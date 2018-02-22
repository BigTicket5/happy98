import React from 'react';
import {Form,Input,Button,Table,Menu,Icon} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ManageForm extends React.Component{
    constructor(){
        super();
        this.addRow = this.addRow.bind(this);
        this.state={
            loading:false,
            rows:[]
        }
    }

    addRow(){
        var nextState = this.state;
        var row = {
            name:'',
            fee:0,
            roomNo:'',
            gender:'',
            contactNo:''
        }
        nextState.rows.push(row);
        this.setState(nextState);
    };
    componentDidMount(){
		this.props.init().then(tenantinit=>{
            if(tenantinit!==undefined){
                this.setState({rows:tenantinit});
            }
		})
	};
    render(){
        return(
            <div>
                <div className="title">
                    <div className="title-left">
                        <Icon name='users'size="big" />Tenant List
                    </div>
                    <div className="title-right">
                        <Button inverted color='orange' type="button" onClick={this.addRow}>New</Button>
                        <Button inverted color='orange' type="button" >Save</Button>
                    </div>
                </div>
                <Form loading={this.state.loading}>
                    <Table  ui celled selectable sortable striped fixed table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Rent Fee</Table.HeaderCell>
                            <Table.HeaderCell>Room No</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>Contact</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.rows.map((row,key) =>{return (<Table.Row key = {key}>
                        <Table.Cell><Input fluid defaultValue={row.tenantName} className="tenant_table_input" readOnly></Input></Table.Cell>
                        <Table.Cell><Input fluid defaultValue={row.rentFee} className="tenant_table_input" readOnly></Input></Table.Cell>
                        <Table.Cell><Input fluid defaultValue={row.roomNo} className="tenant_table_input" readOnly></Input></Table.Cell>
                        <Table.Cell><Input fluid defaultValue={row.gender} className="tenant_table_input" readOnly></Input></Table.Cell>
                        <Table.Cell><Input fluid defaultValue={row.contactNo} className="tenant_table_input" readOnly></Input></Table.Cell>
                        <Table.Cell><Button>Edit</Button><Button>Del</Button></Table.Cell>
                        </Table.Row>)}) }
                    </Table.Body>
                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='left chevron' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a'>5</Menu.Item>
                            <Menu.Item as='a'>6</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='right chevron' />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                    </Table>
                </Form>
            </div>
        );
    }
}

export default ManageForm;