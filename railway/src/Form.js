import React from 'react';
import { Button ,FormControl,InputLabel,Input, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import axios from 'axios';
import './Form.css'
class Form extends React.Component {
  constructor(props) {
		super(props)

		this.state = {
			sationCode: '',
			comments: '',
      		topic: 2,
      result:[]
		}
	}

	handleUsernameChange = event => {
		this.setState({
			sationCode: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
   	  event.preventDefault()
      const url=`https://indianrailapi.com/api/v2/LiveStation/apikey/089b399c02622174626b2b7064f21e7a/StationCode/${this.state.sationCode}/hours/4/`;
      console.log("url",url)
      const data=axios.get(url,{ crossdomain: true }).then(response=>{
		const data1= response.data
		console.log(this.data1)
		}).catch();
       
    //   this.state.result=data
      this.state.sationCode=''
      this.state.comments=''

	}

	render() {
		const { sationCode, comments, topic } = this.state
		return (
      <div>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>sationCode </label>
					<input
						type="text"
						value={sationCode}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="2">2</option>
						<option value="4">4</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
      {/* {this.state.result.map(data => (
        <List className='todo_list'>
          <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText/>
          </ListItem>
          <ListItemText primary={data.Name}/>
          <ListItemText primary={data.Number}/>
        </List>

        ))} */}
      </div>
		)
	}
}
export default Form;