import React from 'react';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import './Form2.css'
class PnrStatus extends React.Component {
  constructor(props) {
		super(props)

		this.state = {
			pnrNumber:'',
            result:[]
		}
	}

	handlePnrChange = event => {
		this.setState({
			pnrNumber: event.target.value
		})
	}
	async makeRequest(url) {
		const config = {
			method: 'get',
			url: url
		}
        const res = await axios(config)
        console.log(res.data)
        if(res.data.ResponseCode==201){
            console.log("error")
            alert(res.data.Message)
            this.state.pnrNumber=''
        }
        else{
        this.setState({
          result: [res.data]
        })}
		// console.log(res.data['Trains'])
		// console.log(res.data);
	}

	handleSubmit = event => {
		 event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/PNRCheck/apikey/089b399c02622174626b2b7064f21e7a/PNRNumber/${this.state.pnrNumber}/Route/1/`;
		 console.log(url)
	     this.makeRequest(url);
		 this.state.pnrNumber=''
	}

	render() {
		console.log(this.state.result)
		const { pnrNumber } = this.state
		return (
      <div responsive="sm">
        <p>

</p>
<p>
  
</p>
			<form onSubmit={this.handleSubmit} responsive="sm">
				<div>
					<label>PNR Number</label>
					<input
						type="text"
						value={pnrNumber}
						onChange={this.handlePnrChange}
					/>
				</div>
        <p>
          <p>
            
          </p>
          <button disabled={!this.state.pnrNumber} type="submit">Submit</button>
        </p>
				
			</form>
      <div>
      <div>
    
		{this.state.result.map(data => (
		<div class="col-12 col-sm-6 col-md-6 col-lg-3">
				<div class="card h-100 mb-4">                    
					<div class="card-header">                                
						<h6 class="card-title m-0 p-0 font-weight-bolder text-secondary">PNR Number {data.PnrNumber}</h6>
						<h6 class="card-title m-0 p-0 font-weight-bolder text-secondary">Train Train Number   {data.TrainNumber}</h6>
            <h6 class="card-title m-0 p-0 font-weight-bolder text-secondary">Current Status  {data.Passangers[0].CurrentStatus}</h6>
					</div>
					<div class="card-body text-left">
			
						<p class="card-text">Train Name   {data.TrainName} </p>
						<p class="card-text">Journey Class {data.JourneyClass}</p>
						<p class="card-text">Chat Prepared   {data.ChatPrepared}</p>
						<p class="card-text">From {data.From}</p>		
						<p class="card-text">To              {data.To}</p>	
						<p class="card-text">Journey Date    {data.JourneyDate}</p>		      
            <p class="card-text">Passangers      {data.Passangers[0].Passenger}</p>	
						<p class="card-text">Booking Status  {data.Passangers[0].CurrentStatus}</p>		                         
					</div>
				</div>
		</div>
		)
		)}
    </div>
    </div>
      
        {/* <div class="table-responsive" responsive="sm">
        <Table className="table" id="Station" responsive="sm">
          <thead>
            <tr>
              <th>PNR Number</th>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Journey Class</th>
              <th>Chat Prepared</th>
              <th>From</th>
              <th>To</th>
              <th>Journey Date</th>
              <th>Passangers</th>
              <th>Booking Status</th>
              <th>Current Status</th>
            </tr>
         {!this.state.result
            <Spinner>
            <span className="sr-only">Loading...</span>
         }
          </thead>
          {this.state.result.map(data => (
          <tbody>
            <tr>
              <td>{data.PnrNumber}</td>
              <td>{data.TrainNumber}</td>
              <td>{data.TrainName}</td>
              <td>{data.JourneyClass}</td>
              <td>{data.ChatPrepared}</td>
              <td>{data.From}</td>
              <td>{data.To}</td>
              <td>{data.JourneyDate}</td>
              <td>{data.Passangers[0].Passenger}</td>
              <td>{data.Passangers[0].BookingStatus}</td>
              <td>{data.Passangers[0].CurrentStatus}</td>
            </tr>
          </tbody>
          ))}
        </Table>
      </div> */}

      </div>
		)
	}
}
export default PnrStatus;