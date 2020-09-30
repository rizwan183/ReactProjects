import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class StationList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sationCode: '',
			destination:'',
			result1:[],
			result2:[]
		}
	}
	async makeRequest(url) {
		const config = {
			method: 'get',
			url: url
		}
        const res = await axios(config)
        console.log(res)
		this.setState({
			result1: res.data['Station']
		})
		// console.log(res.data['Trains'])
		// console.log(res.data);
	}
	async makeRequest2(url) {
		const config = {
			method: 'get',
			url: url
		}
        const res = await axios(config)
        console.log(res)
		this.setState({
			result2: res.data['Station']
		})
		// console.log(res.data['Trains'])
		// console.log(res.data);
	}
	handleUsernameChange = event => {
		this.setState({
			sationCode: event.target.value
		})
		console.log(this.state.sationCode)
		event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/AutoCompleteStation/apikey/089b399c02622174626b2b7064f21e7a/StationCodeOrName/${this.state.sationCode}/`;
		 console.log(url)
	     this.makeRequest(url);
	}
	handleDestinationChange = event => {
		this.setState({
			destination: event.target.value
		})
		console.log(this.state.destination)
		event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/AutoCompleteStation/apikey/089b399c02622174626b2b7064f21e7a/StationCodeOrName/${this.state.destination}/`;
		 console.log(url)
	     this.makeRequest2(url);
	}
	

	handleSubmit = event => {
		 event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/LiveStation/apikey/089b399c02622174626b2b7064f21e7a/StationCode/${this.state.sationCode}/hours/${this.state.hours}/`;
		 console.log(url)
	     this.makeRequest(url);
		 
		 this.state.sationCode=''
		 this.state.destination=''

	}

	render() {
		console.log(this.state.result)
		const { sationCode, destination } = this.state
		return (
      <div>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Source Station </label>
					<input
						type="text"
						value={sationCode}
						onChange={this.handleUsernameChange}
					/>
					<select disabled={!this.state.sationCode} class="selectpicker" data-live-search="true">
					<option>Seletect</option>
					{this.state.result1.map(data => (
						<option value={data.StationCode}>{data.NameEn} {data.NameHn} - {data.StationCode}</option>
					))}
					</select>
					<label>Destination Station </label>
					<input
						type="text"
						value={destination}
						onChange={this.handleDestinationChange}
					/>
					<select disabled={!this.state.sationCode} class="selectpicker" data-live-search="true">
					<option>Seletect</option>
					{this.state.result2.map(data => (
						<option value={data.StationCode}>{data.NameEn} {data.NameHn} - {data.StationCode}</option>
					))}
					</select>
				</div>
				<button disabled={!this.state.sationCode} type="submit">Submit</button>
			</form>
      
        <div>
        {/* <Table id="Station" responsive="sm">
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
        </Table> */}
      </div>

        
      </div>
		)
	}
}
export default StationList;