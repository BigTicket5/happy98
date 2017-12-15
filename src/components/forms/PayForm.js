import React from 'react';
import {Form,Input,Button,Table} from "semantic-ui-react";
import {AMOUNT} from "../../types.js";
import PropTypes from 'prop-types';
class PayForm extends React.Component{
	constructor(){
		super();
		this.state = {
			divStyle:{
				width:'60%',
				margin:'5px 0 0 20%'
			},
			sum:0.0,
			billper:0.0,
			bill:0.0,
			loading:false,
			initData:[]
		};
		this.billsplit = this.billsplit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	};
	handleChange({target}){
		this.setState({
			[target.name] : target.value
		});
	};
	billsplit(){
		this.setState({loading:true});
		var billadd = this.state.sum - AMOUNT;
		var billadd_per = billadd/6;
		this.setState({
			billper:billadd_per,
			bill: billadd
		},()=>{
			this.setState({loading:false});
		});
	};
	onSubmit=()=>{
		var newData =[];
		for(var i in this.state.initData){
			newData.push({tenant:this.state.initData[i].tenant,finalbilling:this.state.initData[i].rentfee + this.state.billper});
		}
		this.props.submit(newData);
	};
	componentDidMount(){
		this.props.init().then(rentinit=>{
			this.setState({initData:rentinit});
		})
	};
	render(){
		const{divStyle,loading} = this.state;
		return (
		<div>
			<Form loading={loading} onSubmit={this.onSubmit}>
				<div style={{ marginTop:'2%',display: 'flex', justifyContent: 'center'}}>
				<h1>Payment Calculator</h1>
				</div>
				<div style={divStyle} >
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<div><Input type="number" step="0.01" id="sum" name="sum"
				ref={(input) => this.input = input}
				onChange={this.handleChange}/>
				<Button type="button" onClick={this.billsplit}> cal</Button></div>
				<Button primary>Save</Button>
				</div>
				<Table  ui celled inverted selectable sortable table >
				  <thead class="">
				    <tr class="">
				    	<th  class="">Name</th>
				    	<th  class="">Rent Fee</th>
				    	<th  class="">Bill</th>
				    	<th  class="">Amount</th>
				    </tr>
				  </thead>
				  <tbody class="" >
				  	{this.state.initData.map((item,key)=>{
				  		 return (
			                  <tr key = {key}>
			                      <td>{item.tenant}</td>
			                      <td>{item.rentfee}</td>
			                      <td>{this.state.billper}</td>
			                      <td>{item.rentfee+this.state.billper}</td>
			                  </tr>
			            )
				  	})}
				  </tbody>
				</Table>
				</div>
			</Form>
		</div>
		)
	}
}

PayForm.propTypes={
	submit:PropTypes.func.isRequired,
	init:PropTypes.func.isRequired
};

export default PayForm;