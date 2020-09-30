import React from 'react';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
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
		this.setState({
			result: [res.data]
		})
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
      <div>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>PNR NUMBER</label>
					<input
						type="text"
						value={pnrNumber}
						onChange={this.handlePnrChange}
					/>
				</div>
				<button disabled={!this.state.pnrNumber} type="submit">Submit</button>
			</form>
      
        <div>
        <Table id="Station" responsive="sm">
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
      </div>

        
      </div>
		)
	}
}
export default PnrStatus;