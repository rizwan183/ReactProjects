import  React, { Component ,Fragment} from  'react';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import axios from 'axios';
class StationLive extends Component{
	constructor(props) {
	super(props);
    this.state  = {
		flights: [],
		input : []
	};
}
	addTodo = (event) =>{
	event.preventDefault(); 
	
	const url=`https://indianrailapi.com/api/v2/LiveStation/apikey/089b399c02622174626b2b7064f21e7a/StationCode/${this.state.input}/hours/4/`;
	
	console.log("url",url)
	const data =axios.get(url,{ crossdomain: true }).then(response=>response.data);
	console.log('i m working')
	console.log("data",data)
  
	
   }

    // componentDidMount(){
    // 	var self=this;
    // 	flightApi.getFlighs().then(function(result){
    // 		console.log(result)
    // 		self.setState({flights:result})
    // 	});
    // }

    render(){
    	return(
    			<div>
    				 <form>
      		<FormControl>
				  <InputLabel htmlFor="my-input">Write Your Todo</InputLabel>
				  <Input value={this.state.input} onChange={event => this.setState(event.target.value)} />
			</FormControl>
          <Button disabled={!this.state.input} type='submit' onClick={this.addTodo} variant="contained" color="primary">
              Add To-Do
          </Button>
      </form>
    			</div>
    		)
    }
} 

export default StationLive;