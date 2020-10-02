import React from 'react';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form2.css'
class Form2 extends React.Component {
  constructor(props) {
		super(props)

		this.state = {
			sationCode: '',
      		hours: 2,
            result:[]
		}
	}

	handleUsernameChange = event => {
		this.setState({
			sationCode: event.target.value
		})
	}


	handleTopicChange = event => {
		this.setState({
			hours: event.target.value
		})
	}
	async makeRequest(url) {
		const config = {
			method: 'get',
			url: url
		}
        const res = await axios(config)
        console.log(res)
		this.setState({
			result: res.data['Trains']
		})
		// console.log(res.data['Trains'])
		// console.log(res.data);
	}

	handleSubmit = event => {
		 event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/LiveStation/apikey/089b399c02622174626b2b7064f21e7a/StationCode/${this.state.sationCode}/hours/${this.state.hours}/`;
		 console.log(url)
	     this.makeRequest(url);
		 
		 this.state.sationCode=''
		 this.state.comments=''

	}

	render() {
		console.log(this.state.result)
		const { sationCode, hours } = this.state
		return (
      <div>
			<form onSubmit={this.handleSubmit} responsive="sm">
				<div>
					<label>Sation Code </label>
					<input
						type="text"
						value={sationCode}
						onChange={this.handleUsernameChange}
						
					/>
					<label>Hours</label>
					<select value={hours} onChange={this.handleTopicChange}>
						<option value="2">2</option>
						<option value="4">4</option>
					</select>
				</div>
				<button disabled={!this.state.sationCode} type="submit">Submit</button>
			</form>
      
        <div>
        <Table id="Station" responsive="sm">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Schedule Arrival</th>
              <th>Schedule Departure</th>
              <th>Expected Arrival</th>
              <th>Expected Departure</th>
              <th>Delay</th>
              <th>Platform</th>
            </tr>
         {!this.state.result
            <Spinner>
            <span className="sr-only">Loading...</span>
         }
          </thead>
          {this.state.result.map(data => (
          <tbody>
            <tr>
              <td>{data.Number}</td>
              <td>{data.Name}</td>
              <td>{data.ScheduleArrival}</td>
              <td>{data.ScheduleDeparture}</td>
              <td>{data.ExpectedArrival}</td>
              <td>{data.ExpectedDeparture}</td>
              <td>{data.Delay}</td>
              <td>{data.Platform}</td>
            </tr>
          </tbody>
          ))}
        </Table>
      </div>

        
      </div>
		)
	}
}
export default Form2;