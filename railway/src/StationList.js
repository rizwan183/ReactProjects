import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'
import DatePicker from "react-datepicker";
import bg from './bg.jpg'
 
import "react-datepicker/dist/react-datepicker.css";
class StationList extends React.Component {
	componentDidMount(){
		document.title = "Railway Tracking"
	  }
	constructor(props) {
		super(props)

		this.state = {
			sationCode: '',
			destination:'',
			select1:'',
			select2:'',
			date:'',
			result1:[],
			result2:[],
			result3:[]
		}
	}
	select1Change= event => {
		this.setState({select1: event.target.value});
		
	  }

	select2Change= event => {
		this.setState({select2: event.target.value});
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
	async makeRequest3(url) {
		const config = {
			method: 'get',
			url: url,
			crossdomain: true 
		}
		const res = await axios(config)
		console.log("EEEEEEEEEEEEEEEEEEEEE")
		console.log(res)
		if (res.data.errorCode==0)
		{
			console.log(res.data['trainBtwnStnsList'])
			this.setState({
				result3: res.data['trainBtwnStnsList']
				
			})
			this.state.select2=''
			this.state.select1=''
			this.state.sationCode=''
			this.state.destination=''
		}
		else{
			alert(res.data.errorMessage)
			this.state.select2=''
			this.state.select1=''
			this.state.sationCode=''
			this.state.destination=''
		}
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
		//  console.log(url)
	     this.makeRequest(url);
	}
	handleDestinationChange = event => {
		this.setState({
			destination: event.target.value
		})
		console.log(this.state.destination)
		event.preventDefault()
		 const url=`https://indianrailapi.com/api/v2/AutoCompleteStation/apikey/089b399c02622174626b2b7064f21e7a/StationCodeOrName/${this.state.destination}/`;
		//  console.log(url)
	     this.makeRequest2(url);
	}
	

	handleSubmit = event => {
		 event.preventDefault()
		 console.log(moment(this.state.date).format("YYYY-MM-DD"))
		 if (this.state.select1=='ALD') {
			this.state.select1='PRYJ'
			console.log("underage");
		}
		if (this.state.select2=='ALD') {
			this.state.select2='PRYJ'
			console.log("underage");
		}
		 const url=`https://securedapi.confirmtkt.com/api/platform/trainbooking/tatwnstns?fromStnCode=${this.state.select1}&destStnCode=${this.state.select2}&doj=${moment(this.state.date).format("DD-MM-YYYY")}&token=26DC943FC49B749394D6DE341F20ECCEB7488D3A1EEDBE9B11358A9D50224AEC&quota=GN&appVersion=290`;
		 console.log(url)
		// const data=axios.get(url,{ crossdomain: true }).then(response=>{
		// 	const data1= response.data
		// 	console.log(this)
		// 	})
		this.makeRequest3(url);
		 console.log("submit Section")
		 console.log(this.state.select1)
		 console.log(this.state.select2)
		 console.log(typeof this.state.date)
		 this.state.sationCode=''
		 this.state.destination=''
		// moment(date).format("YYYY-MM-DD")
	}

	render() {
		console.log(this.state.result)
		const { sationCode, destination,select1,select2} = this.state
		return (
      <div>
		  <div  styles={{ backgroundImage:`url(${bg})` }}></div>
			<form onSubmit={this.handleSubmit} responsive="sm">
				<div>
					<label>Source Station</label>
					<input
						type="text"
						value={sationCode}
						onChange={this.handleUsernameChange}
					/>
					<p>

					</p>
					<p>

					</p>
					<select  className="chosen" value={this.state.select1} onChange={this.select1Change} data-live-search="true">
					<option>Seletect</option>
					{this.state.result1.map(data => (
						<option value={data.StationCode}>{data.NameEn} {data.NameHn} - {data.StationCode}</option>
					))}
					</select>
					<label>Destination Station</label>
					<input
						type="text"
						value={destination}
						onChange={this.handleDestinationChange}
					/>
					<p>

		</p>
		<p>
			
		</p>
					<select value={this.state.select2} onChange={this.select2Change}class="selectpicker" data-live-search="true">
					<option>Seletect</option>
					{this.state.result2.map(data => (
						<option value={data.StationCode}>{data.NameEn} {data.NameHn} - {data.StationCode}</option>
					))}
					</select>
				</div>
				<div>
					 Date
					<p>
				    <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.date} onChange={date => this.setState({date:date})}  />
					</p>
				</div>
				<button disabled={!this.state.sationCode,!this.state.destination} type="submit">Submit</button>
			</form>
        <div>
		{this.state.result3.map(data => (
		<div class="col-12 col-sm-6 col-md-6 col-lg-3">
				<div class="card h-100 mb-4">                    
					<div class="card-header">                                
						<p class="card-title m-0 p-0 font-weight-bolder text-secondary">Train Name {data.trainName}</p>
						<h6 class="card-title m-0 p-0 font-weight-bolder text-secondary">Train Number {data.trainNumber}</h6>
						<h6 class="card-title m-0 p-0 font-weight-bolder text-secondary">Train Type {data.trainType}</h6>
					</div>
					<div class="card-body text-left">
						<p class="card-text"> 
						<h6 style={{textAlign:"left",marginLeft:"0px"}}>{data.fromStnCode}</h6>
						<h6 style={{textAlign:"right",marginRight:"0px"}}>{data.toStnCode}</h6></p>
						<p class="card-text">Arrival Time {data.arrivalTime} </p>
						<p class="card-text">Departure Time {data.departureTime}</p>
						<p class="card-text">Distance {data.distance}</p>
						<p class="card-text">Duration {data.duration}</p>			                             
					</div>
				</div>
		</div>
		)
		)}
      </div>
	 
	  
       
      </div>
	  	
		)
	}
}
export default StationList;