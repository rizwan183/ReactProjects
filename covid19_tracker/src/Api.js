import React from 'react';
import axios from 'axios';
const API_URL = 'https://api.covid19india.org/';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log("date",today)

export default class Api{

	constructor(){}

	getStateDaily(){
		const url=`${API_URL}/states_daily.json`;
		return axios.get(url).then(response=>response.data);
	}

	getdailyData(){
		const url=`${API_URL}/v4/data-${yyyy}-${mm}-${dd-2}.json`;
		
		return axios.get(url).then(response=>response.data);
	}
}