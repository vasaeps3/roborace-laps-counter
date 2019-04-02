import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RobotList from './components/RobotList'

class App extends Component {

    state = {
        robots : [
            {id : 1, laps : 0, name : 'SUBARU1'},
            {id : 2, laps : 0, name : 'SUBARU2'},
            {id : 3, laps : 0, name : 'SUBARU3'},
            {id : 4, laps : 0, name : 'SUBARU4'},
            {id : 5, laps : 0, name : 'SUBARU5'},
            {id : 6, laps : 0, name : 'SUBARU6'}
        ]
    }

    render() {
        return (
        <div id="root">
            <div id="header">Roborace Laps Counter</div>
            <div id="menu">
                <div>State: <span id="race-state">NOT CONNECTED</span></div>
                <div>Race Time: <span id="stopwatch">0:00.000</span></div>
            </div>
            <div id="content">
                <RobotList robots={this.state.robots}/>
            </div>
            <div id="buttons">
                <div id="config" class="block">
                    <input type="text" id="ip" value="ws://192.168.1.200"/>
                    <input type="button" id="btn-connect" value="Connect"/>
                </div>
                <div id="control" class="block">
                    <input type="button" class="btn-command" id="btn-ready" value="READY" data-command="READY"
                            className="hidden"/>
                    <input type="button" class="btn-command" id="btn-steady" value="STEADY" data-command="STEADY"
                            className="hidden"/>
                    <input type="button" class="btn-command" id="btn-go" value="GO" data-command="RUNNING"
                            className="hidden"/>
                    <input type="button" class="btn-command" id="btn-finish" value="FINISH" data-command="FINISH"
                            className="hidden"/>
                </div>
            </div>
            
        </div>
        );
    }
}

export default App;
