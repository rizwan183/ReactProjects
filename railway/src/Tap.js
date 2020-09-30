import React, { Fragment } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form2 from './Form2';
import PnrStatus from './PnrStatus'
import StationList from './StationList'
import 'bootstrap/dist/css/bootstrap.min.css';
function Tap(){
    
        return(
        <div>
                <Tabs  defaultActiveKey="findtrains" transition={false} id="noanim-tab-example">
                    <Tab eventKey="findtrains" title="Find Trains">
                    <StationList />
                    </Tab>
                    <Tab  eventKey="livestation" title="Live Station">
                        <Form2 />
                    </Tab>
                    <Tab eventKey="pnrstatus" title="Pnr Status">
                    <PnrStatus />
                    </Tab>
                </Tabs>
        </div>
        )
}
export default Tap;