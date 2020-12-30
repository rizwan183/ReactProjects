import React from 'react'
import './Menu.css'
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import TrainIcon from '@material-ui/icons/Train';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import Form2 from './Form2';
import PnrStatus from './PnrStatus'
import StationList from './StationList'
import { BrowserRouter,Route, Link } from "react-router-dom";
class Menu extends React.Component {

    render(){
    return (
        <div>
            <div class="row">
<BrowserRouter> 
  <div class="col-3 menu">
  
    <ul>
    <li><AirlineSeatReclineNormalIcon/><Link to='/findTrain'>Train BetWeen Station</Link></li>
      <li><TrainIcon /><Link to="/StationList">Live Statiton</Link></li>
      <li><InfoSharpIcon /><Link to='/PnrStatus'>PNR Status</Link></li>
    </ul>
    
  </div>

  <div class="col-9 info">
  <Route exact path='/StationList' component={Form2} />
  <Route exact path='/PnrStatus' component={PnrStatus} />
  <Route exact path='/findTrain' component={StationList} />
  </div>
  </BrowserRouter> 
</div>
        </div>
    )
}
}

export default Menu;
