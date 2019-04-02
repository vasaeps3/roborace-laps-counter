import React, { Component } from 'react';

class RobotList extends Component {
    render() {
        console.log(this.props);
        const {robots} = this.props;
        return (
            <table align="center">
                <thead>
                    <tr>
                        <th>Start #</th>
                        <th>Control</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Laps</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {robots.map((robot, i) => {
                        return (
                            <tr>
                                <td>Start #</td>
                                <td>Control</td>
                                <td>{robot.name}</td>
                                <td>Place</td>
                                <td>{robot.laps}</td>
                                <td>Time</td>
                                
                            </tr>)
                    })}
                </tbody>
            </table>
        )
    }
}


export default RobotList;