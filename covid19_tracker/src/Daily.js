import  React, { Component ,Fragment} from  'react';
import Api from './Api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './State.css'

const api = new Api();
class Daily extends Component{
	constructor(props)
        {   super(props);
            this.state = {
                data: []
            }
        }
    componentDidMount(){
    	var self=this;
    	api.getdailyData().then(function(result){
            let details = [];
            // console.log("data",result)
            for (var i in result) {
                details.push(result[i])
            }
            // console.log("data",result)
            self.setState({ data: [result] })
    		// console.log("result",result)
            // self.setState({data:result})
            // console.log("result",result)
    	});
    }

    render(){
        console.log("details",this.state.data)
        const newData=[this.state.data]
        var key;
        const keys = [];
        
        for(var k in this.state.data[0]) keys.push(k);
        var len=keys.length;
        console.log("keys",keys.length)
        var i=0;
        for (; i < len; ) {
            console.log(keys[i])
            i++;
          }

        //console.log("data",newData)
    	return(
    			<div>
                <TableContainer id="stateData">
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Andaman and Nicobar Islands</TableCell>
                                <TableCell align="right">Andhra Pradesh</TableCell>
                                <TableCell align="right">Arunachal Pradesh</TableCell>
                                <TableCell align="right">Assam</TableCell>
                                <TableCell align="right">Bihar</TableCell>
                                <TableCell align="right">Chandigarh</TableCell>
                                <TableCell align="right">Chhattisgarh</TableCell>
                                <TableCell align="right">Dadra and Nagar Haveli and Daman and Diu</TableCell>
                                <TableCell align="right">Delhi</TableCell>
                                <TableCell align="right">Goa</TableCell>
                                <TableCell align="right">Gujarat</TableCell>
                                <TableCell align="right">Haryana</TableCell>
                                <TableCell align="right">Himachal Pradesh</TableCell>
                                <TableCell align="right">Jammu and Kashmir</TableCell>
                                <TableCell align="right">Jharkhand</TableCell>
                                <TableCell align="right">Karnataka</TableCell>
                                <TableCell align="right">Kerala</TableCell>
                                <TableCell align="right">Ladakh</TableCell>
                                <TableCell align="right">Lakshadweep</TableCell>
                                <TableCell align="right">Madhya Pradesh</TableCell>
                                <TableCell align="right">Maharashtra</TableCell>
                                <TableCell align="right">Manipur</TableCell>
                                <TableCell align="right">Meghalaya</TableCell>
                                <TableCell align="right">Mizoram</TableCell>
                                <TableCell align="right">Nagaland</TableCell>
                                <TableCell align="right">Odisha</TableCell>
                                <TableCell align="right">Puducherry</TableCell>
                                <TableCell align="right">Punjab</TableCell>
                                <TableCell align="right">Rajasthan</TableCell>
                                <TableCell align="right">Sikkim</TableCell>
                                <TableCell align="right">Tamil Nadu</TableCell>
                                <TableCell align="right">Telangana</TableCell>
                                <TableCell align="right">Tripura</TableCell>
                                <TableCell align="right">Uttar Pradesh</TableCell>
                                <TableCell align="right">Uttarakhand</TableCell>
                                <TableCell align="right">West Bengal</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            
                            {Object.keys(this.state.data).map((key, row) => 
                                <Fragment>
                                <TableRow >
                                    {key}
                                    {/* Value: {Object.keys(this.state.data[0])} */}
                                    var keys= Object.keys(this.state.data[0]);
                                    for (k of keys))
                                    {
                                        k
                                    }
                                    
                                {/* <TableCell align="right">{key.AP.delta.confirmed}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.an}</TableCell>
                                <TableCell align="right">{row.ap}</TableCell>
                                <TableCell align="right">{row.ar}</TableCell>
                                <TableCell align="right">{row.as}</TableCell>
                                <TableCell align="right">{row.br}</TableCell>
                                <TableCell align="right">{row.ch}</TableCell>
                                <TableCell align="right">{row.dd}</TableCell>
                                <TableCell align="right">{row.dl}</TableCell>
                                <TableCell align="right">{row.ga}</TableCell>
                                <TableCell align="right">{row.gj}</TableCell>
                                <TableCell align="right">{row.hr}</TableCell>
                                <TableCell align="right">{row.hp}</TableCell>
                                <TableCell align="right">{row.jk}</TableCell>
                                <TableCell align="right">{row.jh}</TableCell>
                                <TableCell align="right">{row.ka}</TableCell>
                                <TableCell align="right">{row.kl}</TableCell>
                                <TableCell align="right">{row.la}</TableCell>
                                <TableCell align="right">{row.ld}</TableCell>
                                <TableCell align="right">{row.mp}</TableCell>
                                <TableCell align="right">{row.mh}</TableCell>
                                <TableCell align="right">{row.mn}</TableCell>
                                <TableCell align="right">{row.ml}</TableCell>
                                <TableCell align="right">{row.mz}</TableCell>
                                <TableCell align="right">{row.nl}</TableCell>
                                <TableCell align="right">{row.or}</TableCell>
                                <TableCell align="right">{row.py}</TableCell>
                                <TableCell align="right">{row.pb}</TableCell>
                                <TableCell align="right">{row.rj}</TableCell>
                                <TableCell align="right">{row.sk}</TableCell>
                                <TableCell align="right">{row.tn}</TableCell>
                                <TableCell align="right">{row.ts}</TableCell>
                                <TableCell align="right">{row.tr}</TableCell>
                                <TableCell align="right">{row.up}</TableCell>
                                <TableCell align="right">{row.uk}</TableCell>
                                <TableCell align="right">{row.wb}</TableCell> */}
                                </TableRow>
                                </Fragment>
                            )}
                            </TableBody>
                        </Table>
                </TableContainer>
    			</div>
    		)
    }
} 

export default Daily;